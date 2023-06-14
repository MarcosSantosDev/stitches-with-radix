import * as React from 'react'

import { Grid } from "@/common/components/structure/Grid/Grid";
import { Heading } from "@/common/components/structure/Typography/Typography";

import * as S from './Playground.styles';

export default function Grids() {
  return (
    <S.Card>
      <Heading as="h2" size="lg">Simple Grid #</Heading>
      <br />
      <Grid cols={4}>
        <div><h3>Item 1</h3></div>
        <div><h3>Item 2</h3></div>
        <div><h3>Item 3</h3></div>
        <div><h3>Item 4</h3></div>
      </Grid>
    </S.Card>
  );
}