import GuidePage from '../../components/GuidePage';
import extOverview from './data/ext-overview';

export default function CopilotExtensions() {
  return <GuidePage seoTitle="Copilot Extensions" path="/copilot-extensions" dataFiles={[extOverview]} />;
}
