import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | wu-document-miniature', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{wu-document-miniature}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#wu-document-miniature}}
        template block text
      {{/wu-document-miniature}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
