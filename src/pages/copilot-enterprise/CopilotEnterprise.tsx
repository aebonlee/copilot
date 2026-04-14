import GuidePage from '../../components/GuidePage';
import enterpriseOverview from './data/enterprise-overview';

export default function CopilotEnterprise() {
  return <GuidePage seoTitle="Enterprise" path="/copilot-enterprise" dataFiles={[enterpriseOverview]} />;
}
