import GuidePage from '../../components/GuidePage';
import promptBasics from './data/prompt-basics';
import promptEvaluation from './data/prompt-evaluation';
import promptTechniques from './data/prompt-techniques';
import promptExamples from './data/prompt-examples';

export default function PromptEvalHub() {
  return (
    <GuidePage
      seoTitle="프롬프트평가"
      seoTitleEn="Prompt Evaluation"
      seoDescription="프롬프트 작성 기법, 평가 기준, 실전 예시 및 실습 가이드"
      path="/prompt-eval"
      dataFiles={[promptBasics, promptEvaluation, promptTechniques, promptExamples]}
    />
  );
}
