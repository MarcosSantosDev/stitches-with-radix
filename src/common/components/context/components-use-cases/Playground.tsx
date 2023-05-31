import * as React from 'react'

import Inputs from './Inputs';
import Selects from './Selects';

import * as S from './Playground.styles';

export default function Playground() {
  return (
    <S.CardGroup>
      <Inputs />
      <Selects />
    </S.CardGroup>
  );
}
