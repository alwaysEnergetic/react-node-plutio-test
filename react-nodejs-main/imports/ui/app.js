import React from 'react';
import AppMainMenu from './components/appMainMenu'
import PageHeader from './components/pageHeader'
import MainContent from './components/mainContent'

const App = () => {

  return (
    <>
      <AppMainMenu />
      <div className="page">
        <PageHeader />
        <MainContent />
      </div>
    </>
  );
}

export default App;
