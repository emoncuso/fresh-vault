import { module, test } from 'qunit';
import { setupRenderingTest } from 'fresh-vault/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pages/overview', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Pages::Overview />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Pages::Overview>
        template block text
      </Pages::Overview>
    `);

    assert.dom().hasText('template block text');
  });
});
