import { module, test } from 'qunit';
import { setupTest } from 'fresh-vault/tests/helpers';

module('Unit | Route | authenticated/overview', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:authenticated/overview');
    assert.ok(route);
  });
});
