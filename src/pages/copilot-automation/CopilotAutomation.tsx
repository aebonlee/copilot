import GuidePage from '../../components/GuidePage';
import automationOverview from './data/automation-overview';

export default function CopilotAutomation() {
  return <GuidePage seoTitle="업무자동화 실전" seoTitleEn="Work Automation" path="/copilot-automation" dataFiles={[automationOverview]} />;
}
