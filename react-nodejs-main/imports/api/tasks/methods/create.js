import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'tasks.insert'(title) {
        Tasks.insert({
            title,
            repeat: {
                interval: 200
            },
            status: "incomplete",
            customFields: [],
            color: '#aaa222'
        });
    },
});