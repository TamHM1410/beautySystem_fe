import ExpertPage from '@/components/Expert/Expert';
import FeatureService from '@/components/FeatureService/FeatureService';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <ExpertPage />
      <FeatureService />
    </>
  );
}
