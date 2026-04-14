import GuidePage from '../components/GuidePage';
import m365Overview from './m365-copilot/data/m365-overview';
import teamsOverview from './teams-copilot/data/teams-overview';

export default function M365Hub() {
  return (
    <GuidePage
      seoTitle="M365 Copilot"
      path="/m365-copilot"
      dataFiles={[m365Overview, teamsOverview]}
    />
  );
}
