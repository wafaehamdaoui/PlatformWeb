import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app //<Route exact path="/" element={<Home />} />

import Admin from "./components/admin";
import Student from "./components/student";
import Login from "./components/login";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import About from "./components/about";
import UserList from "./components/userList";
import UserRecord from "./components/userRecords";
import Update from "./components/update";
import Register from "./components/register";
import EditMe from "./components/editme"
 
const App = () => {
 return (
   <div>
     
     <Routes>
	     <Route exact path="/" element={<Login />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/student" element={<Student />} />
       <Route path="/student_record/" element={<UserRecord />} />
       <Route path="/student_edit/:id" element={<EditMe />} />
       <Route path="/student_create" element={<Create />} />
       <Route path="/about" element={<About />} />
       
       <Route path="/admin_record/" element={<RecordList />} />
       <Route path="/user/" element={<UserList />} />
       <Route path="/update/:id" element={<Update />} />
       <Route path="/add" element={<Register />} />
       <Route path="/admin_edit/:id" element={<Edit />} />
     </Routes>
   </div>
 );
};
 
export default App;
