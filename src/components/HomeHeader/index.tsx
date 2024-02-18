import { TouchableOpacity } from 'react-native';
import { Power } from 'phosphor-react-native';

import {
  Container,
  Greeting,
  Message,
  Name
} from './styles';

export function HomeHeader() {
  return (
    <Container>
      <Greeting>
        <Message>Olá</Message>

        <Name>Pedro</Name>
      </Greeting>

      <TouchableOpacity>
        <Power/>
      </TouchableOpacity>
    </Container>
  );
}