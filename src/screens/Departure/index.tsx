import React from 'react';
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';
import { Button } from '../../components/Button';

export function Departure() {
  return (
    <Container>
      <Header title='Saída' />

      <Content>
        <LicensePlateInput
          label='Placa do Veículo'
          placeholder='BRA1234'
        />

        <TextAreaInput 
          label='Finalidade'
          placeholder='Vou utilizar o veículo para...'
        />

        <Button
          title='Registrar Saída'
        />
      </Content>

    </Container>
  );
}