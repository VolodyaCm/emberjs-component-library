import { setJSONDoc } from '@storybook/addon-docs/ember';
import docJson from '../dist/storybook-docgen/index.json';
setJSONDoc(docJson);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
