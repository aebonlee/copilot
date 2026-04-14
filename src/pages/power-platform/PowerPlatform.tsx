import GuidePage from '../../components/GuidePage';
import powerOverview from './data/power-overview';

export default function PowerPlatform() {
  return <GuidePage seoTitle="Power Platform" path="/power-platform" dataFiles={[powerOverview]} />;
}
