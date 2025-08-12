import { module, test } from 'qunit';
import { setupRenderingTest } from 'fresh-vault/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pages/login', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Pages::Login />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Pages::Login>
        template block text
      </Pages::Login>
    `);

    assert.dom().hasText('template block text');
  });
});
