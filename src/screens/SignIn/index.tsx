import React, { useState } from 'react'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useApp, Realm } from '@realm/react'

import backgroundImg from '../../assets/background.png';

import { Container, Title, Slogan } from './styles';
import { Button } from '../../components/Button';

import { WEB_CLIENT_ID, IOS_CLIENT_ID } from '@env';
import { Alert } from 'react-native';



GoogleSignin.configure({
  scopes: ['email', 'profile'],
  webClientId: WEB_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
});

export function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);;
  const app = useApp();

  async function handleGoogleSignIn() {
    try {
      setIsAuthenticating(true);

      const { idToken } = await GoogleSignin.signIn();

      if (idToken) {
        const credentials = Realm.Credentials.jwt(idToken);

        console.log(credentials);

        await app.logIn(credentials);
      } else {
        Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta Google');
        setIsAuthenticating(false);
      }

    } catch (error) {
      console.log(error);
      Alert.alert('Entrar', 'Não foi possível conectar-se a sua conta Google.');
      setIsAuthenticating(false);
    }
  }

  return (
    <Container source={backgroundImg}>
      <Title>Ignite Fleet</Title>
      <Slogan>Gestão de uso de veículos</Slogan>
      <Button
        title='Entrar com Google'
        isLoading={isAuthenticating}
        onPress={handleGoogleSignIn}
      />
    </Container>
  );
}