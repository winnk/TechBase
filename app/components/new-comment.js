import Ember from 'ember';

export default Ember.Component.extend({
 addNewComment: false,
 actions: {
   reviewFormShow() {
     this.set('addNewComment', true);
   },
   saveComment() {
    var params = {
      author: this.get('author'),
      content: this.get('content'),
      date: this.get('date'),
      question: this.get('question')
     };
    this.set('addNewComment', false);
    this.sendAction('saveComment', params);
  }
 }
});
