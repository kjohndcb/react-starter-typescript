import { ReactNode } from 'react';

import { Root } from './Text.styles';

interface Props {
  children: ReactNode;
}

export default function Text(props: Props) {
  return <Root {...props} />;
}
