import { TouchableOpacity } from 'react-native';
import { useUser, useApp } from '@realm/react';

import Feather from '@expo/vector-icons/Feather';
import theme from '../../theme';


import {
  Container,
  Greeting,
  Message,
  Name,
  Picture
} from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function HomeHeader() {
  const user = useUser();
  const app = useApp();

  const insets = useSafeAreaInsets();

  const paddingTop = insets.top + 32;

  function handleLogout(){
    app.currentUser?.logOut();
  }

  return (
    <Container style={{ paddingTop }}>
      <Picture
        source={{ uri: user?.profile.pictureUrl}}
        placeholder="L184i9ofbHof00ayjsay~qj[ayj@"
      />

      <Greeting>
        <Message>Olá</Message>

        <Name>
          {user?.profile.name}
        </Name>
      </Greeting>

      <TouchableOpacity onPress={handleLogout} activeOpacity={0.7}>
        <Feather name='power' size={28} color={theme.COLORS.GRAY_400}/>
      </TouchableOpacity>
    </Container>
  );
}