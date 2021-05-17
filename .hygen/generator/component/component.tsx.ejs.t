---
to: "<%= absPath %>/<%= componentName %>.tsx"
---
import { Root } from './<%= componentName %>.styles';

export default function <%= componentName %>() {
  return <Root></Root>;
}
