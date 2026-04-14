import GuidePage from '../../components/GuidePage';
import windowsOverview from './data/windows-overview';

export default function WindowsCopilot() {
  return <GuidePage seoTitle="Windows Copilot" path="/windows-copilot" dataFiles={[windowsOverview]} />;
}
