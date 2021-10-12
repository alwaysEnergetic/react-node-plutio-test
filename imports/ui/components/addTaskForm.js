import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

const AddTaskForm = () => {

    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (!text) return;

        Meteor.call('tasks.insert', text.trim());

        setText("");
    };

    return (
        <>
            <form className="add-task" noValidate="">
                <div>
                    <div className="fieldset add-task-input fieldset-stripped">
                        <div className="fieldset-content">
                            <label className="fieldset-label">
                                <span className="fieldset-label-content has-icon">
                                    <i className="icon-plus" />
                                </span>
                                <input
                                    className=""
                                    name="title"
                                    placeholder="Add new task"
                                    type="text"
                                    autoComplete="off"
                                    value=""
                                    onChange={(e) => setText(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default AddTaskForm;