import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  // BEM naming convention
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />

        <Feed />

        {/* Feeds */}

        {/* Widgets */}
      
      </div>   
    </div>
  );
}

export default App;
