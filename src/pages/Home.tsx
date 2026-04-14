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
      title: isKo ? 'GitHub Copilot으로 코딩 생산성 극대화' : 'Maximize Coding Productivity with GitHub Copilot',
      description: isKo
        ? 'VS Code 코드 완성, Chat, CLI, Workspace까지 — 개발자를 위한 AI 코딩 어시스턴트의 모든 것'
        : 'From VS Code completion, Chat, CLI to Workspace — everything about AI coding assistants for developers.',
    },
    {
      title: isKo ? 'M365 Copilot으로 업무 효율 혁신' : 'Revolutionize Work with M365 Copilot',
      description: isKo
        ? 'Word, Excel, PowerPoint, Outlook, Teams에서 AI가 문서 작성, 데이터 분석, 프레젠테이션을 자동화합니다.'
        : 'AI automates document creation, data analysis, and presentations in Word, Excel, PPT, Outlook & Teams.',
    },
    {
      title: isKo ? 'Power Platform + Copilot Studio로 업무자동화' : 'Work Automation with Power Platform + Copilot Studio',
      description: isKo
        ? 'Power Automate, Power Apps, Power BI와 커스텀 Copilot으로 엔드투엔드 업무 워크플로우를 자동화합니다.'
        : 'Automate end-to-end workflows with Power Automate, Power Apps, Power BI, and custom Copilots.',
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
            <FeatureCard icon="fa-code" title={t('features.githubCopilot.title')} description={t('features.githubCopilot.desc')} />
            <FeatureCard icon="fa-file-word" title={t('features.m365Copilot.title')} description={t('features.m365Copilot.desc')} />
            <FeatureCard icon="fa-gears" title={t('features.automation.title')} description={t('features.automation.desc')} />
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
              <div className="stat-number">13+</div>
              <div className="stat-label">{t('stats.guides')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">80+</div>
              <div className="stat-label">{t('stats.topics')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4</div>
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
