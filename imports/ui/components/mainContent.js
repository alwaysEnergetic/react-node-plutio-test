import React from 'react';
import AddTaskForm from './addTaskForm'
import IncompleteTaskList from './incompleteTaskList'
import CompletedTaskList from './completedTaskList'

const MainContent = () => {

    return (
        <>
            <div className="main-tasks-page content list-view">
                <AddTaskForm />
                <div className="groups-wrapper">
                    <IncompleteTaskList />
                    <CompletedTaskList />
                </div>
            </div>
        </>
    );
}

export default MainContent;
