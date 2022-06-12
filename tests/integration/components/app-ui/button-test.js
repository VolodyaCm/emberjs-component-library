import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | app-ui/button', function (hooks) {
  setupRenderingTest(hooks);

  test('Renders primary button', async function (assert) {
    await render(hbs`
      <AppUi::Button
        data-test-id="app-ui-btn-test"
        @title="Primary"
      />
    `);

    assert.dom(`[data-test-id="app-ui-btn-test"]`).exists().hasText('Primary');
  });
});
