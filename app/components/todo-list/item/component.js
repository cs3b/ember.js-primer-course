import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['todoClass'],
  attributeBindings: ['draggable'],

  draggable: 'true',

  doubleClick() {
    alert('did you touch me twice?');
  },

  drop(event) {
    let id = event.dataTransfer.getData('text/data');
    this.get('action')(id);
  }
});
