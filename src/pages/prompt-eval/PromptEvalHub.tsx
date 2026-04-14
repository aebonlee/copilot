import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import GuidePage from '../../components/GuidePage';
import promptBasics from './data/prompt-basics';
import promptEvaluation from './data/prompt-evaluation';
import promptTechniques from './data/prompt-techniques';
import promptExamples from './data/prompt-examples';
import '../../styles/practice.css';

export default function PromptEvalHub() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <>
      <GuidePage
        seoTitle="프롬프트평가"
        seoTitleEn="Prompt Evaluation"
        seoDescription="프롬프트 작성 기법, 평가 기준, 실전 예시 및 실습 가이드"
        path="/prompt-eval"
        dataFiles={[promptBasics, promptEvaluation, promptTechniques, promptExamples]}
        ctaBanner={
          <div className="prompt-practice-cta">
            <div className="prompt-practice-cta-text">
              <h3>{isKo ? '프롬프트 실력을 테스트해보세요!' : 'Test your prompt skills!'}</h3>
              <p>{isKo ? '선택형 퀴즈 + 프롬프트 평가 + 직접 작성까지, 250점 만점 실습을 진행하세요.' : 'Take a 250-point practice: quiz + evaluation + writing exercises.'}</p>
            </div>
            <Link to="/prompt-eval/practice" className="prompt-practice-cta-btn">
              <i className="fa-solid fa-pen-to-square" />
              {isKo ? '실습 시작' : 'Start Practice'}
            </Link>
          </div>
        }
      />
    </>
  );
}
