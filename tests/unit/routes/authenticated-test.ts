import { module, test } from 'qunit';
import { setupTest } from 'fresh-vault/tests/helpers';

module('Unit | Route | authenticated', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:authenticated');
    assert.ok(route);
  });
});
