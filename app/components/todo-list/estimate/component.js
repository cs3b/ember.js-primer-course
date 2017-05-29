import Ember from 'ember';

const EstimateComponent = Ember.Component.extend({
  tagName: 'strong',

  didRender() {
    this._super(...arguments); 

    let estimate = this.get('estimate');

    if (estimate > 10) {
      this.set('todoClass', 'red');
    } else {
      this.set('todoClass', 'green');
    }
  }
});

EstimateComponent.reopenClass({
  positionalParams: ['estimate']
});

export default EstimateComponent;
