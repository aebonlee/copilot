import GuidePage from '../../components/GuidePage';
import chatBasics from './data/chat-basics';

export default function CopilotChat() {
  return <GuidePage seoTitle="Copilot Chat" path="/copilot-chat" dataFiles={[chatBasics]} />;
}
