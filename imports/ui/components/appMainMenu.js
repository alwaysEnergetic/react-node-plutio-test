import React from 'react';

const AppMainMenu = () => (
    <>
        <div className="app-mainmenu">
            <div className="container">
                <div className="menu-list">
                    <a className="list-item active" href="#">
                        <i className="item-icon icon-check" />
                        <p>Tasks</p>
                    </a>
                    <a className="list-item" href="#">
                        <i className="item-icon icon-toolkit" />
                        <p>Projects</p>
                    </a>
                    <a className="list-item" href="#">
                        <i className="item-icon icon-user" />
                        <p>People</p>
                    </a>
                    <a className="list-item" href="#">
                        <i className="item-icon icon-calendar" />
                        <p>Calendar</p>
                    </a>
                    <a className="list-item" href="#">
                        <i className="item-icon icon-inbox" />
                        <p>Inbox</p>
                    </a>
                    <a className="list-item" href="#">
                        <i className="item-icon icon-timer" />
                        <p>Timesheets</p>
                    </a>
                    <hr />
                    <a className="list-item" href="#">
                        <i className="item-icon icon-settings" />
                        <p>Settings</p>
                    </a>
                    <a className="list-item" onClick={() => console.log('support')}>
                        <i className="item-icon icon-question-mark" />
                        <p>Support</p>
                    </a>
                </div>
            </div>
        </div>
    </>
);

export default AppMainMenu;