module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    // '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-controls',
  ],
  framework: '@storybook/ember',
};
