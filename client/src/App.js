import React, { useEffect, useState } from 'react';
import AuthContext from './Contexts/AuthContext';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Views/Auth.jsx';

function App() {
  const [ user, setUser ] = useState(null);
  //const [ isInitiated = true, setIsInitiated ] = useState(null);
  let isInitiated = true;

  //useEffect(() => {
    //init(); 
  //}, []);

  //const init = () => {
    //setIsInitiated(true);
  //};

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("token", null);
  }
  
  return (
    <div>
      {isInitiated && (
        <AuthContext.Provider value={{user, setUser, handleLogout}}>
          <Router>
            <NavBar />
            <Route path="/auth/login" element={ <Login /> } />
          </Router>
        </AuthContext.Provider>
      )}
    </div>
  );
}

export default App;
