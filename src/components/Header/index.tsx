import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import Feather from '@expo/vector-icons/Feather';

import {
  Container, Title
} from './styles';

type Props = {
  title: string;
}

export function Header({ title }: Props) {
  const { COLORS } = useTheme();
  const { goBack } = useNavigation();
  const insets = useSafeAreaInsets();

  const paddingTop = insets.top + 38;

  return (
    <Container style={{ paddingTop }}>
      <TouchableOpacity onPress={goBack} activeOpacity={0.7}>
        <Feather
          name='arrow-left'
          size={24}
          color={COLORS.BRAND_LIGHT}
        />
      </TouchableOpacity>

      <Title>
        {title}
      </Title>
    </Container>
  );
}