import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
  // BEM naming convention
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
      <Login />
      ) : (
        <>
        <Header />

        <div className="app__body">
          <Sidebar />
  
          <Feed />
  
          <Widgets />
        
        </div>
        </>
      )}
         
    </div>
  );
}

export default App;
