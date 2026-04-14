import GuidePage from '../../components/GuidePage';
import workspaceOverview from './data/workspace-overview';

export default function CopilotWorkspace() {
  return <GuidePage seoTitle="Copilot Workspace" path="/copilot-workspace" dataFiles={[workspaceOverview]} />;
}
