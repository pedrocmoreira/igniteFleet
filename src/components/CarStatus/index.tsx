import { useTheme } from 'styled-components';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  IconBox,
  Message,
  TextHighlight,
} from './styles';

import AntDesign from '@expo/vector-icons/AntDesign';


type Props = TouchableOpacityProps & {
  licensePlate?: string | null;
}

export function CarStatus({ licensePlate = null, ...rest }: Props) {
  const theme = useTheme();

  const icon = licensePlate ? 'key' : 'car';
  const message = licensePlate ? `Veículo ${licensePlate} em uso. ` : `Nenhum veículo em uso. `;
  const status = licensePlate ? 'chegada' : 'saída'

  return (
    <Container {...rest} activeOpacity={0.7}>
      <IconBox>
        <AntDesign
          name={icon}
          size={32}
          color={theme.COLORS.BRAND_LIGHT}
        />
      </IconBox>

      <Message>
        {message}

        <TextHighlight>
          Clique aqui para registrar a {status}
        </TextHighlight>
      </Message>
    </Container>
  );
}