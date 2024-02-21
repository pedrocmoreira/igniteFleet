import React, { useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';

import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';
import { Button } from '../../components/Button';

import { Container, Content } from './styles';

const keyboardAvoidingViewBehavior = Platform.OS === 'android' ? 'height' : 'position';

export function Departure() {
  const descriptioRef = useRef<TextInput>(null);

  function handleDepartureRegister() {
    console.log('OK');
  }

  return (
    <Container>
      <Header title='Saída' />

      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={keyboardAvoidingViewBehavior}
      >
        <ScrollView>
          <Content>
            <LicensePlateInput
              label='Placa do Veículo'
              placeholder='BRA1234'
              onSubmitEditing={() => descriptioRef.current?.focus()}
              returnKeyType='next'
            />

            <TextAreaInput
              ref={descriptioRef}
              label='Finalidade'
              placeholder='Vou utilizar o veículo para...'
              onSubmitEditing={handleDepartureRegister}
              returnKeyType='send'
              blurOnSubmit
            />

            <Button
              title='Registrar Saída'
              onPress={handleDepartureRegister}
            />
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}