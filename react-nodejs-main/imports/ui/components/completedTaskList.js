import React from 'react';
import { Meteor } from 'meteor/meteor';

import { useTracker } from 'meteor/react-meteor-data'
import _ from 'lodash';
import { Tasks } from '../../api/tasks/methods/get';

const CompletedTaskList = () => {

    const { completedTasks } = useTracker(() => {
        Meteor.subscribe('tasks');

        return Tasks.find({ status: { $eq: 'incomplete' } }).fetch();
    });

    return (
        <>
            {completedTasks.map(task =>
                <div className="group-container open">
                    <div className="group-head">
                        <p>Completed</p>
                    </div>
                    <div className="group-content">
                        <div className="task">
                            <a className="task-link" href="#">
                                <div className="task-link-head">
                                    <div className="task-checkbox">
                                        <label className="checkbox">
                                            <input type="checkbox" defaultChecked />
                                            <span className="checkbox-toggle">
                                                <i className="checkbox-icon icon-check" />
                                            </span>
                                        </label>
                                    </div>
                                    <div className="task-title">
                                        <p>{task.title}</p>
                                    </div>
                                </div>
                                <div className="task-link-body">
                                    <div className="indicators">
                                        {task.hasDescription ?
                                            <span className="icon-indicator">
                                                <i className="icon-description" />
                                            </span>
                                            : ''}
                                        {task.commentsCount > 0 ?
                                            <span className="icon-indicator">
                                                <i className="icon-chat" />
                                            </span>
                                            : ''}
                                        {task.filesCount > 0 ?
                                            <span className="icon-indicator">
                                                <i className="icon-attach" />
                                            </span>
                                            : ''}

                                        {task.icon - timer > 0 ?
                                            <span className="icon-indicator">
                                                <i className="icon-timer" />
                                            </span>
                                            : ''}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default CompletedTaskList;