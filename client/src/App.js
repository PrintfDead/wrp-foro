import React, { useEffect, useState, useContext } from 'react';
import AuthContext from './Contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';
import Login from './Views/Auth.jsx';
import axios from 'axios';
import MainPCU from './Views/PCU/Main.jsx';

function App() {
  const [ user, setUser ] = useState(null);
  const [isInitiated, setIsInitiated] = useState(null);
//xd
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      setUser(null);
      localStorage.setItem("token", null);

      setIsInitiated(true);
      return;
    } else {
      let data = {
        token
      };

      const response = await axios.post("/api/auth/init", data).catch(e => console.error(e));
      if(typeof response === undefined) { setIsInitiated(true); return; }
      const { rows } = response.data;

      setUser(rows);
      setIsInitiated(true);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.setItem("token", null);
  };

  return (
    <div>
      {isInitiated && (
        <AuthContext.Provider value={{ user, setUser, handleLogout }}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/auth/login" element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path="/pcu/home" element={!user ? <Login /> : <MainPCU />} />
            </Routes>
          </Router>
        </AuthContext.Provider>
      )}
    </div>
  );
}

export default App;
