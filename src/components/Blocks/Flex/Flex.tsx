import { ReactNode, ReactElement } from 'react';

import { Root } from './Flex.styles';
import {
  SpaceProps,
  LayoutProps,
  BackgroundProps,
  FlexboxProps,
} from 'styled-system';

interface Props extends SpaceProps, LayoutProps, BackgroundProps, FlexboxProps {
  children?: ReactNode;
}

export default function Flex({ children, ...props }: Props): ReactElement {
  return <Root {...props}>{children}</Root>;
}
