import GuidePage from '../../components/GuidePage';
import m365Overview from './data/m365-overview';

export default function M365Copilot() {
  return <GuidePage seoTitle="M365 Copilot" path="/m365-copilot" dataFiles={[m365Overview]} />;
}
