import GuidePage from '../components/GuidePage';
import overview from './copilot-overview/data/overview';
import setup from './copilot-overview/data/setup';
import basics from './copilot-vscode/data/basics';
import chatBasics from './copilot-chat/data/chat-basics';
import cliOverview from './copilot-cli/data/cli-overview';
import workspaceOverview from './copilot-workspace/data/workspace-overview';
import extOverview from './copilot-extensions/data/ext-overview';
import enterpriseOverview from './copilot-enterprise/data/enterprise-overview';

export default function GitHubCopilotHub() {
  return (
    <GuidePage
      seoTitle="GitHub Copilot"
      path="/github-copilot"
      dataFiles={[overview, setup, basics, chatBasics, cliOverview, workspaceOverview, extOverview, enterpriseOverview]}
    />
  );
}
