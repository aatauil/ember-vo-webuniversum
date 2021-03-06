import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | wu-info-tile-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{wu-info-tile-header}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#wu-info-tile-header}}
        template block text
      {{/wu-info-tile-header}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
