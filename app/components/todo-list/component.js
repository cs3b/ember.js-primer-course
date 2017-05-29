import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  newTodo: {done: false},

  todosOrder: ['done:asc', 'name:asc'],
  todosSorted: Ember.computed.sort('todos', 'todosOrder'),

  actions: {
    addTodo() {
      this.newTodo.createdAt = new Date();
      this.newTodo.dueDate = new Date(this.newTodo.dueDate);

      this.get('store').createRecord('todo', this.newTodo).save();

      this.set('newTodo.name', '');
      this.set('newTodo.dueDate', '');
      this.set('newTodo.estimate', '');
    }
  }
});
