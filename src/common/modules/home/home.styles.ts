import { styled } from '../../../../stitches.config'

export const Box = styled('div', {})

export const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
})

export const Link = styled('a', {
  fontFamily: '$system',
  textDecoration: 'none',
  color: '$purple600',
})

export const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
})