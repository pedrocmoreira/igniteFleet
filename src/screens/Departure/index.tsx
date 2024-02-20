import React, { useRef } from 'react';
import { TextInput } from 'react-native';

import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';
import { Button } from '../../components/Button';

import { Container, Content } from './styles';

export function Departure() {
  const descriptioRef = useRef<TextInput>(null);

  function handleDepartureRegister(){
    console.log('OK');
  }

  return (
    <Container>
      <Header title='Saída' />

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

    </Container>
  );
}