import Ember from 'ember';
import moment from 'moment';

export function timeAgo([date]) {
  if (date) {
    return moment(date).fromNow();
  } else {
    return "due date not set";
  }
}

export default Ember.Helper.helper(timeAgo);
