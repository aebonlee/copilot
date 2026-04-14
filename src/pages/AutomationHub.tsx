import GuidePage from '../components/GuidePage';
import windowsOverview from './windows-copilot/data/windows-overview';
import studioOverview from './copilot-studio/data/studio-overview';
import powerOverview from './power-platform/data/power-overview';
import automationOverview from './copilot-automation/data/automation-overview';

export default function AutomationHub() {
  return (
    <GuidePage
      seoTitle="업무자동화"
      seoTitleEn="Work Automation"
      path="/automation"
      dataFiles={[windowsOverview, studioOverview, powerOverview, automationOverview]}
    />
  );
}
