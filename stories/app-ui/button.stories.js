import { hbs } from 'ember-cli-htmlbars';

const sizes = {
  sm: 'btn--sm',
  md: 'btn--md',
  lg: 'btn--lg',
  xl: 'btn--xl',
  xl2: 'btn--2xl',
};

const styles = {
  outlined: 'btn--outlined',
  primary: '',
};

export default {
  title: 'AppUi/Button',
  argTypes: {
    style: {
      options: Object.keys(styles),
      mapping: styles,
      control: {
        type: 'radio',
        labels: {
          outlined: 'Outlined (.btn--outlined)',
          primary: 'Primary (default)',
        },
      },
    },
    size: {
      options: Object.keys(sizes),
      mapping: sizes,
      control: {
        type: 'radio',
        labels: {
          sm: 'Small          (.btn--sm)',
          md: 'Medium         (.btn--md) - default',
          lg: 'Large          (.btn--md)',
          xl: 'Extra Large    (.btn--xl)',
          xl2: '2 Extra Large (.btn--2xl)',
        },
      },
    },
  },
};

export const Default = ({ size, style }) => ({
  component: 'Button',
  template: hbs`<AppUi::Button @title="Primary" class="{{this.size}} {{this.style}}" />`,
  context: {
    size,
    style,
  },
  args: {
    size: sizes.xl2,
  },
});
