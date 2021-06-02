import { ReactNode, ReactElement } from 'react';
import { SpaceProps, LayoutProps, BackgroundProps } from 'styled-system';

import { Root } from './Box.styles';

interface Props extends SpaceProps, LayoutProps, BackgroundProps {
  children?: ReactNode;
}

export default function Box({ children, ...props }: Props): ReactElement {
  return <Root {...props}>{children}</Root>;
}
