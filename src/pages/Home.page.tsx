import StyledTextInput from '@/components/custom/StyledInputText';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import FeatureService from '@/components/FeatureService/FeatureService';

export function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <  FeatureService/>
    </>
  );
}
