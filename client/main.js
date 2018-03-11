import { Template } from 'meteor/templating';
import { Tasks } from '../imports/api/tasks.js';
import './main.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});

Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('tasks');
});

Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Meteor.call('tasks.insert', text);
 
    // Clear form
    target.text.value = '';
  },
});