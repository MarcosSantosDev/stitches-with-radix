import * as React from 'react'

import { TextArea } from "@/common/components/form/TextArea/TextArea";
import { TextField } from "@/common/components/form/TextField/TextField";
import { Heading } from "@/common/components/structure/Typography/Typography";

import * as S from './Playground.styles';

export default function Inputs() {
  return (
    <S.Card>
      <Heading as="h2" size="lg">Campos de entrada</Heading>
      <br />
      <TextField key="1" placeholder="Nome completo" />
      <br />
      <TextArea key="2" placeholder="Escreva sobre você" />
    </S.Card>
  );
}