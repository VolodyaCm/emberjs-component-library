import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { CLASS_NAMES } from 'app-ui/components/app-ui/dropdown/classnames';

module('Integration | Component | app-ui/dropdown', function (hooks) {
  setupRenderingTest(hooks);

  test('Renders dropdown trigger custom title', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`
      <AppUi::Dropdown as |D|>
        <D.Trigger @title="List of links" />
      </AppUi::Dropdown>
    `);

    assert.dom(`.${CLASS_NAMES.TARGET_TITLE}`).hasText('List of links');
  });

  test('Opens dropdown meny by clicking on trigger', async function (assert) {
    await render(hbs`
      <AppUi::Dropdown as |D|>
        <D.Trigger data-test-id="app-ui-dropdown__trigger" @title="List of links" />
        <D.Menu as |M|>
          <M.Button @title="Button 2" />
          <M.Button @title="Button 2" />
          <M.Item @title="My Option 1" />
          <M.Item @title="My Option 2" />
        </D.Menu>
      </AppUi::Dropdown>
    `);

    await click('[data-test-id="app-ui-dropdown__trigger"]');
    assert.dom(`.${CLASS_NAMES.MENU}`).exists();

    // await this.pauseTest();
  });

  test('Closes dropdown menu', async function (assert) {
    await render(hbs`
      <AppUi::Dropdown as |D|>
        <D.Trigger data-test-id="app-ui-dropdown__trigger" @title="List of links" />
        <D.Menu as |M|>
          <M.Button @title="Button 2" />
          <M.Button @title="Button 2" />
        </D.Menu>
      </AppUi::Dropdown>
    `);

    await click('[data-test-id="app-ui-dropdown__trigger"]');
    await click('[data-test-id="app-ui-dropdown__trigger"]');

    assert.dom(`.${CLASS_NAMES.MENU}`).doesNotExist();
  });

  test('Menu does not open when trigger disabled', async function (assert) {
    await render(hbs`
      <AppUi::Dropdown as |D|>
        <D.Trigger disabled data-test-id="app-ui-dropdown__trigger" @title="List of links" />
        <D.Menu as |M|>
          <M.Button @title="Button 2" />
          <M.Button @title="Button 2" />
        </D.Menu>
      </AppUi::Dropdown>
    `);

    await click('[data-test-id="app-ui-dropdown__trigger"]').catch(() => {
      assert.dom(`.${CLASS_NAMES.MENU}`).doesNotExist();
    });
  });
});
