import { useNavigation } from '@react-navigation/native';
import { HomeHeader } from '../../components/HomeHeader';
import { Container } from './styles';
import { Text } from 'react-native';

export function Home() {
  return (
    <Container>
      <HomeHeader />
    </Container>
  );
}