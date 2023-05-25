import Head from 'next/head'

import StitchesLogo from '@/common/components/context/home/StitchesLogo'

import * as S from './home.styles';

export default function Home() {
  return (
    <S.Box css={{ paddingY: '$6' }}>
      <S.Container size={{ '@initial': '1', '@bp1': '2' }}>
        <StitchesLogo />
        <S.Text as="h1">Hello, from Stitches.</S.Text>
        <S.Text>
          For full documentation, visit{' '}
          <S.Link href="https://stitches.dev">stitches.dev</S.Link>.
        </S.Text>
      </S.Container>
    </S.Box>
  )
}
