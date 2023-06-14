import { styled } from '@/styles/stitches.config'

export const Grid = styled('div', {
  display: 'grid',
  variants: {
    cols: {
      1: { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', },
      2: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', },
      3: { gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', },
      4: { gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', },
      5: { gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', },
      6: { gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', },
      7: { gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', },
      8: { gridTemplateColumns: 'repeat(8, minmax(0, 1fr))', },
      9: { gridTemplateColumns: 'repeat(9, minmax(0, 1fr))', },
      10: { gridTemplateColumns: 'repeat(10, minmax(0, 1fr))', },
      11: { gridTemplateColumns: 'repeat(11, minmax(0, 1fr))', },
      12: { gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', },
    },
  },
  defaultVariants: {
    cols: '1'
  }
})