import styled from 'styled-components';
import { background } from 'styled-system';

import theme from '@/styles/theme';

const { media } = theme;

interface Props {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  xxl?: string | number;
}

export const Root = styled.div`
  ${background}
  ${(props: Props) => {
    const { xs = '', sm = '', md = '', lg = '', xl = '', xxl = '' } = props;
    return `
      ${xs ? `padding-bottom: ${withUnit(xs)};` : ''}
      @media (min-width: ${media.sm}) {
        ${sm ? `padding-bottom: ${withUnit(sm)};` : ''}
      }
      @media (min-width: ${media.md}) {
        ${md ? `padding-bottom: ${withUnit(md)};` : ''}
      }
      @media (min-width: ${media.lg}) {
        ${lg ? `padding-bottom: ${withUnit(lg)};` : ''}
      }
      @media (min-width: ${media.xl}) {
        ${xl ? `padding-bottom: ${withUnit(xl)};` : ''}
      }
      @media (min-width: ${media.xxl}) {
        ${xxl ? `padding-bottom: ${withUnit(xxl)};` : ''}
      }
    `;
  }}
`;

function withUnit(val: string | number): string {
  const unit = typeof val === 'number' ? `${val}px` : val;
  return unit;
}
