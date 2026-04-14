import GuidePage from '../../components/GuidePage';
import introduction from './data/introduction';

export default function AboutPage() {
  return (
    <GuidePage
      seoTitle="About"
      seoDescription="Copilot Master 플랫폼 소개"
      path="/about"
      dataFiles={[introduction]}
    />
  );
}
