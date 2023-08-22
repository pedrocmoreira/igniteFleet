import React from 'react';

import{
 Container, Title
} from './styles';
import { TouchableOpacityProps } from 'react-native';
import { Loading } from '../Loading';

interface Props extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
}

export function Button({title, isLoading = false, ...rest}: Props){
  return (
    <Container
      activeOpacity={.7}
      disabled={isLoading}
      {...rest}
    >
      {
        isLoading 
        ? <Loading/>
        : <Title>{title}</Title>
      }
    </Container>
  );
}