import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  click() {
    this.todo.toggleProperty('done');
  }
});
