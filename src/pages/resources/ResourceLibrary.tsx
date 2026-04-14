import GuidePage from '../../components/GuidePage';
import githubDocs from './data/github-docs';
import m365Docs from './data/m365-docs';
import automationDocs from './data/automation-docs';
import learningDocs from './data/learning-docs';

export default function ResourceLibrary() {
  return (
    <GuidePage
      seoTitle="자료실"
      seoTitleEn="Resource Library"
      seoDescription="Microsoft Copilot 공식 문서 및 학습 리소스 모음"
      path="/resources"
      dataFiles={[githubDocs, m365Docs, automationDocs, learningDocs]}
    />
  );
}
