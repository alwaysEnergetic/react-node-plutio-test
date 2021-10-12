import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
    Meteor.publish('tasks', function tasksPublication() {
        var tasks = Tasks.find({
            $or: [
                { isPrivate: { $ne: true } },
            ],
        });
        return tasks;
    });
}