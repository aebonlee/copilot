import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { signOut } from '../../utils/auth';
import { BOARDS } from '../../config/boards';

export default function Navbar() {
  const { mode, toggleTheme, colorTheme, setColorTheme, COLOR_OPTIONS } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { user, isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showTooltips, setShowTooltips] = useState(false);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState('');
  const colorPickerRef = useRef(null);
  const userMenuRef = useRef(null);

  const isKo = language === 'ko';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileExpandedGroup('');
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) setShowColorPicker(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setShowUserMenu(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const tooltipShown = sessionStorage.getItem('navbar-tooltips-shown');
      if (!tooltipShown) {
        setShowTooltips(true);
        const timer = setTimeout(() => {
          setShowTooltips(false);
          sessionStorage.setItem('navbar-tooltips-shown', 'true');
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [isAuthenticated]);

  const themeIconClass = mode === 'auto' ? 'fa-circle-half-stroke' : mode === 'light' ? 'fa-sun' : 'fa-moon';
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || '';
  const avatarLetter = displayName.charAt(0).toUpperCase();

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  function toggleMobileGroup(group: string) {
    setMobileExpandedGroup(mobileExpandedGroup === group ? '' : group);
  }

  const NAV_ITEMS = [
    { path: '/about', ko: 'About', en: 'About' },
    {
      ko: 'GitHub Copilot', en: 'GitHub Copilot', hasDropdown: true, groupId: 'github',
      children: [
        { path: '/copilot-overview', ko: 'Copilot 개요', en: 'Overview', icon: 'fa-rocket', color: '#1B7F37' },
        { path: '/copilot-vscode', ko: 'VS Code 연동', en: 'VS Code', icon: 'fa-code', color: '#007ACC' },
        { path: '/copilot-chat', ko: 'Copilot Chat', en: 'Copilot Chat', icon: 'fa-comments', color: '#8B5CF6' },
        { path: '/copilot-cli', ko: 'Copilot CLI', en: 'CLI', icon: 'fa-terminal', color: '#D97706' },
        { path: '/copilot-workspace', ko: 'Workspace', en: 'Workspace', icon: 'fa-laptop-code', color: '#059669' },
        { path: '/copilot-extensions', ko: 'Extensions', en: 'Extensions', icon: 'fa-puzzle-piece', color: '#E34F26' },
        { path: '/copilot-enterprise', ko: 'Enterprise', en: 'Enterprise', icon: 'fa-building', color: '#4285F4' },
      ],
    },
    {
      ko: 'M365 Copilot', en: 'M365 Copilot', hasDropdown: true, groupId: 'm365',
      children: [
        { path: '/m365-copilot', ko: 'Word·Excel·PPT·Outlook', en: 'Word·Excel·PPT·Outlook', icon: 'fa-file-word', color: '#0078D4' },
        { path: '/teams-copilot', ko: 'Teams Copilot', en: 'Teams Copilot', icon: 'fa-users-rectangle', color: '#6264A7' },
      ],
    },
    {
      ko: '자동화', en: 'Automation', hasDropdown: true, groupId: 'automation',
      children: [
        { path: '/windows-copilot', ko: 'Windows Copilot', en: 'Windows Copilot', icon: 'fa-desktop', color: '#00A4EF' },
        { path: '/copilot-studio', ko: 'Copilot Studio', en: 'Copilot Studio', icon: 'fa-wand-magic-sparkles', color: '#742774' },
        { path: '/power-platform', ko: 'Power Platform', en: 'Power Platform', icon: 'fa-bolt', color: '#0B556A' },
        { path: '/copilot-automation', ko: '업무자동화 실전', en: 'Work Automation', icon: 'fa-gears', color: '#C4314B' },
      ],
    },
    {
      path: '/community', ko: '커뮤니티', en: 'Community', hasDropdown: true, groupId: 'community',
      children: BOARDS.map(b => ({ path: `/community/${b.id}`, ko: b.nameKo, en: b.nameEn, icon: b.icon, color: b.color })),
    },
  ];

  function isGroupActive(item: any) {
    if (item.children) return item.children.some((c: any) => location.pathname.startsWith(c.path));
    return location.pathname.startsWith(item.path);
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-claude">Copilot</span>
            <span className="logo-master">Master</span>
          </Link>

          <ul className="nav-links">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx} className={`nav-item${item.hasDropdown ? ' has-dropdown' : ''}`}>
                {item.path && !item.children ? (
                  <Link to={item.path} className={`nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}>
                    {isKo ? item.ko : item.en}
                  </Link>
                ) : item.hasDropdown ? (
                  <>
                    {item.path ? (
                      <Link to={item.path} className={`nav-link ${isGroupActive(item) ? 'active' : ''}`}>
                        {isKo ? item.ko : item.en}
                        <i className="fa-solid fa-chevron-down nav-dropdown-icon" />
                      </Link>
                    ) : (
                      <span className={`nav-link ${isGroupActive(item) ? 'active' : ''}`} style={{ cursor: 'default' }}>
                        {isKo ? item.ko : item.en}
                        <i className="fa-solid fa-chevron-down nav-dropdown-icon" />
                      </span>
                    )}
                    <div className="nav-dropdown">
                      {item.children!.map((child: any) => (
                        <Link key={child.path} to={child.path} className="nav-dropdown-item">
                          <i className={`fa-solid ${child.icon}`} style={{ color: child.color, width: '18px' }} />
                          {isKo ? child.ko : child.en}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={item.path!} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>
                    {isKo ? item.ko : item.en}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <div className="color-picker-wrapper" ref={colorPickerRef}>
              <button className="color-picker-btn" onClick={() => setShowColorPicker(!showColorPicker)} title="Color Theme">
                <div className="color-dot-preview" style={{ background: COLOR_OPTIONS.find(c => c.name === colorTheme)?.color }} />
              </button>
              {showTooltips && (
                <div className="navbar-tooltip navbar-tooltip-color">
                  {isKo ? '테마 컬러를 변경할 수 있어요' : 'Change theme color'}
                </div>
              )}
              <div className={`color-picker-dropdown ${showColorPicker ? 'show' : ''}`}>
                {COLOR_OPTIONS.map(opt => (
                  <button
                    key={opt.name}
                    className={`color-option ${colorTheme === opt.name ? 'active' : ''}`}
                    style={{ background: opt.color }}
                    onClick={() => { setColorTheme(opt.name); setShowColorPicker(false); }}
                    title={opt.name}
                  />
                ))}
              </div>
            </div>

            <div className="theme-toggle-wrapper">
              <button className="theme-toggle" onClick={toggleTheme} title={mode}>
                <i className={`fa-solid ${themeIconClass}`} />
              </button>
              {showTooltips && (
                <div className="navbar-tooltip navbar-tooltip-theme">
                  {isKo ? '라이트/다크 모드 전환' : 'Toggle light/dark mode'}
                </div>
              )}
            </div>

            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === 'ko' ? 'EN' : 'KO'}
            </button>

            {isAuthenticated ? (
              <div className="user-menu-wrapper" ref={userMenuRef}>
                <button className="user-avatar-btn" onClick={() => setShowUserMenu(!showUserMenu)}>
                  {avatarLetter}
                </button>
                <div className={`user-menu-dropdown ${showUserMenu ? 'show' : ''}`}>
                  <div className="user-menu-header">
                    <div className="user-menu-name">{displayName}</div>
                    <div className="user-menu-email">{user?.email}</div>
                  </div>
                  {isAdmin && (
                    <Link to="/admin" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                      <i className="fa-solid fa-shield-halved" /> {t('nav.admin')}
                    </Link>
                  )}
                  <button className="user-menu-item danger" onClick={handleSignOut}>
                    <i className="fa-solid fa-right-from-bracket" /> {t('nav.logout')}
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="nav-auth-btn nav-login-btn">
                {t('nav.login')}
              </Link>
            )}

            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {NAV_ITEMS.map((item, idx) =>
            item.hasDropdown ? (
              <li key={idx} className="mobile-nav-group">
                <button
                  className="mobile-nav-link mobile-nav-group-toggle"
                  onClick={() => toggleMobileGroup(item.groupId!)}
                >
                  {isKo ? item.ko : item.en}
                  <i className={`fa-solid fa-chevron-down mobile-chevron${mobileExpandedGroup === item.groupId ? ' expanded' : ''}`} />
                </button>
                {mobileExpandedGroup === item.groupId && (
                  <ul className="mobile-nav-sub">
                    {item.path && (
                      <li>
                        <Link to={item.path} className="mobile-nav-sub-link">
                          <i className="fa-solid fa-grid-2" style={{ width: '18px' }} />
                          {isKo ? '전체 보기' : 'View All'}
                        </Link>
                      </li>
                    )}
                    {item.children!.map((child: any) => (
                      <li key={child.path}>
                        <Link to={child.path} className="mobile-nav-sub-link">
                          <i className={`fa-solid ${child.icon}`} style={{ color: child.color, width: '18px' }} />
                          {isKo ? child.ko : child.en}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={idx}>
                <Link to={item.path!} className="mobile-nav-link">
                  {isKo ? item.ko : item.en}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="mobile-menu-actions">
          {isAuthenticated ? (
            <button className="btn btn-primary btn-sm" onClick={handleSignOut}>{t('nav.logout')}</button>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">{t('nav.login')}</Link>
          )}
        </div>
      </div>
    </>
  );
}
