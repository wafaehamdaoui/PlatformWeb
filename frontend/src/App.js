import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
 
import RessourceList from './RessourceList';
import UserList from './UserList';
import Login from './login';
// We use Route in order to define the different routes of our application
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/resources" element={<RessourceList />} />
        <Route exact path="/users" element={<UserList />} />
      </Routes>
    </div>
  );
 };
  
 export default App;
