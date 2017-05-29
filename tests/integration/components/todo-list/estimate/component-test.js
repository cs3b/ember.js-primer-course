import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todo-list/estimate', 'Integration | Component | todo list/estimate', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{todo-list/estimate}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#todo-list/estimate}}
      template block text
    {{/todo-list/estimate}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
