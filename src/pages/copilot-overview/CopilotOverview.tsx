import GuidePage from '../../components/GuidePage';
import overview from './data/overview';
import setup from './data/setup';

export default function CopilotOverview() {
  return <GuidePage seoTitle="Copilot 개요" seoTitleEn="Copilot Overview" path="/copilot-overview" dataFiles={[overview, setup]} />;
}
