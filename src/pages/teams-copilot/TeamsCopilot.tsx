import GuidePage from '../../components/GuidePage';
import teamsOverview from './data/teams-overview';

export default function TeamsCopilot() {
  return <GuidePage seoTitle="Teams Copilot" path="/teams-copilot" dataFiles={[teamsOverview]} />;
}
