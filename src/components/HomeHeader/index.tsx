import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather'

import {
  Container,
  Greeting,
  Message,
  Name
} from './styles';
import theme from '../../theme';

export function HomeHeader() {
  return (
    <Container>
      <Greeting>
        <Message>Olá</Message>

        <Name>Pedro</Name>
      </Greeting>

      <TouchableOpacity>
        <Feather name='power' size={28} color={theme.COLORS.GRAY_400}/>
      </TouchableOpacity>
    </Container>
  );
}