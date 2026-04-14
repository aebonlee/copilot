import GuidePage from '../../components/GuidePage';
import studioOverview from './data/studio-overview';

export default function CopilotStudio() {
  return <GuidePage seoTitle="Copilot Studio" path="/copilot-studio" dataFiles={[studioOverview]} />;
}
