import React from 'react';

const PageHeader = () => (
    <>
        <div className="page-header">
            <div className="content has-back-button">
                <div className="back-button">
                    <a>
                        <i className="icon-chevron-left" />
                    </a>
                </div>
                <div className="content-block">
                    <div className="page-title">
                        <h1>Tasks</h1>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default PageHeader;