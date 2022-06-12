import { hbs } from 'ember-cli-htmlbars';
// import DropdownComponent from '../../lib/app-ui/addon/components/app-ui/dropdown/index';

export default {
  title: 'AppUi/Dropdown',
  argTypes: {
    renderInPlace: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = ({ renderInPlace, disabled }) => ({
  component: 'AppUiDropdownComponent',
  template: hbs`
    <AppUi::Dropdown as |D|>
      <D.Trigger disabled={{this.disabled}} />
      <D.Menu as |M|>

        <D.Dropdown @renderInPlace={{this.renderInPlace}} as |D|>
          <D.Button @title="Nested List" />
          <D.Menu as |M|>
            <M.Item @title="My Option 1" />
            <M.Item @title="My Option 2" />
          </D.Menu>
        </D.Dropdown>

        <M.Button @title="Button 2" />
        <M.Button @title="Button 2" />

        <M.Item @title="My Option 1" />
        <M.Item @title="My Option 2" />
      </D.Menu>
    </AppUi::Dropdown>
  `,
  context: {
    renderInPlace,
    disabled,
  },
});

Default.args = {
  renderInPlace: false,
  disabled: false,
};

export const DropdownLinks = () => hbs`
  <AppUi::Dropdown as |d|>
    <d.Trigger />
    <d.Menu as |M|>
      <M.Link @route="test" as |Link|>
        <Link @title="Link to test" />
      </M.Link>
      <M.Link @route="application" as |Link|>
        <Link @title="Link to application" />
      </M.Link>
    </d.Menu>
  </AppUi::Dropdown>
`;
