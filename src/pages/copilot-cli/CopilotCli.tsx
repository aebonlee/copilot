import GuidePage from '../../components/GuidePage';
import cliOverview from './data/cli-overview';

export default function CopilotCli() {
  return <GuidePage seoTitle="Copilot CLI" path="/copilot-cli" dataFiles={[cliOverview]} />;
}
