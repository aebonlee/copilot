import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LEARNING_PATHS } from '../config/site';
import SEOHead from '../components/SEOHead';
import HeroBackground from '../components/HeroBackground';
import HeroCarousel from '../components/HeroCarousel';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  const carouselSlides = [
    {
      title: isKo ? 'VS Code에서 AI 코드 완성 마스터' : 'Master AI Code Completion in VS Code',
      description: isKo
        ? '인라인 제안, 멀티라인 완성, Tab 수락 패턴까지 - Copilot 코드 완성의 모든 것을 배웁니다.'
        : 'From inline suggestions to multi-line completion and Tab acceptance patterns.',
    },
    {
      title: isKo ? 'Copilot Chat으로 대화형 코딩' : 'Conversational Coding with Copilot Chat',
      description: isKo
        ? 'Slash Commands, @participants, Agent Mode 등 Chat의 고급 기능을 마스터합니다.'
        : 'Master advanced Chat features like Slash Commands, @participants, and Agent Mode.',
    },
    {
      title: isKo ? 'CLI & Workspace로 워크플로우 혁신' : 'Revolutionize Workflow with CLI & Workspace',
      description: isKo
        ? '터미널에서의 Copilot CLI와 GitHub Copilot Workspace로 개발 생산성을 극대화합니다.'
        : 'Maximize development productivity with Copilot CLI and GitHub Copilot Workspace.',
    },
  ];

  return (
    <>
      <SEOHead path="/" />

      {/* Hero */}
      <section className="hero">
        <HeroBackground />
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fa-solid fa-sparkles" />
            {t('hero.badge')}
          </div>
          <h1 className="hero-title">
            {t('hero.title')}
            <span className="hero-title-highlight">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-actions">
            <Link to="/copilot-overview" className="btn btn-primary-large">{t('hero.cta')}</Link>
            <Link to="/about" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              {t('hero.ctaSecondary')}
            </Link>
          </div>
          <HeroCarousel slides={carouselSlides} />
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('features.title')}</h2>
            <p className="section-subtitle">{t('features.subtitle')}</p>
          </div>
          <div className="features-grid">
            <FeatureCard icon="fa-code" title={t('features.codeCompletion.title')} description={t('features.codeCompletion.desc')} />
            <FeatureCard icon="fa-comments" title={t('features.copilotChat.title')} description={t('features.copilotChat.desc')} />
            <FeatureCard icon="fa-terminal" title={t('features.cliWorkspace.title')} description={t('features.cliWorkspace.desc')} />
            <FeatureCard icon="fa-users" title={t('features.community.title')} description={t('features.community.desc')} />
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="paths-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.pathsTitle')}</h2>
            <p className="section-subtitle">{t('home.pathsSubtitle')}</p>
          </div>
          <div className="paths-grid">
            {LEARNING_PATHS.map(path => (
              <Link key={path.id} to={path.path} className="path-card">
                <div className="path-card-header">
                  <div className="path-icon" style={{ background: path.color }}>
                    <i className={`fa-solid ${path.icon}`} />
                  </div>
                  <h3 className="path-name">{isKo ? path.nameKo : path.nameEn}</h3>
                </div>
                <p className="path-desc">{isKo ? path.descKo : path.descEn}</p>
                <div className="path-topics">
                  {path.topics.map((topic, i) => (
                    <span key={i} className="path-topic">{topic}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">{t('stats.guides')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40+</div>
              <div className="stat-label">{t('stats.topics')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">{t('stats.categories')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="workflow-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('home.workflowTitle')}</h2>
            <p className="section-subtitle">{t('home.workflowSubtitle')}</p>
          </div>
          <div className="workflow-grid">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="workflow-step">
                <div className="workflow-number">{n}</div>
                <h3 className="workflow-title">{t(`home.step${n}`)}</h3>
                <p className="workflow-desc">{t(`home.step${n}desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">{t('cta.title')}</h2>
          <p className="cta-description">{t('cta.description')}</p>
          <Link to="/copilot-overview" className="btn btn-primary-large">{t('cta.button')}</Link>
        </div>
      </section>
    </>
  );
}
