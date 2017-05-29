import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  todosOrder: ['done:asc', 'name:asc'],
  todosSorted: Ember.computed.sort('todos', 'todosOrder'),
  actions: {
    addTodo() {
      let newTodoText = this.get('newTodoText');
      this.get('store').createRecord('todo', {
        name: newTodoText,
        done: false
      }).save();
      this.set('newTodoText', '');
    }
  }
});
