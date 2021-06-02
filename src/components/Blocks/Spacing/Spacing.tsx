import { ReactNode, ReactElement } from 'react';
import { BackgroundProps } from 'styled-system';

import { Root } from './Spacing.styles';

interface Props extends BackgroundProps {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  xxl?: string | number;
  children?: ReactNode;
}

export default function Spacing(props: Props): ReactElement {
  return <Root {...props} />;
}
