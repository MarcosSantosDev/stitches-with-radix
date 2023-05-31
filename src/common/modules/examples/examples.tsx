import * as React from 'react'

import {
  Heading,
  Label,
  Link,
  Paragraph
} from '@/common/components/structure/Typography/Typography';

import * as S from "./examples.styles";

export default function Examples() {
  return (
    <S.Container size="2">
      <Heading>Heading Component</Heading>
      <br />
      <Label>Label Component</Label>
      <br />
      <Link href='/'>Link Component</Link>
      <br />
      <Paragraph>Paragraph Component</Paragraph>
    </S.Container>
  );
}
