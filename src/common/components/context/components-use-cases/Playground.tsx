import * as React from 'react'

import Inputs from './Inputs';
import Selects from './Selects';
import Buttons from './Buttons';

import * as S from './Playground.styles';

export default function Playground() {
  return (
    <S.CardGroup>
      <Inputs />
      <Selects />
      <Buttons />
    </S.CardGroup>
  );
}
