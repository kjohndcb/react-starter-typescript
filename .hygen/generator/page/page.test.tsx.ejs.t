---
to: "<%= isTestIncluded ? `${absPath}/${componentName}.test.tsx` : null %>"
---
import { render } from '@testing-library/react';
import <%= componentName %> from './<%= componentName %>';

test('renders without errors', () => {
  render(<<%= componentName %> />);
});
