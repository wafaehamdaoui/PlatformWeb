import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app //<Route exact path="/" element={<Home />} />
import Home from "./components/home";
import Admin from "./components/admin";
import Student from "./components/student";
import Login from "./components/login";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import AddDemande from "./components/addDemande";
import About from "./components/about";
import UserList from "./components/userList";
import UserRecord from "./components/userRecords";
import Update from "./components/update";
import Adduser from "./components/Adduser";
import AddResource from "./components/addResource";
import All from "./components/All";
 
const App = () => {
 return (
   <div>
     
     <Routes>
       <Route exact path="/" element={<Home />} />
	     <Route exact path="/login" element={<Login />} />
       <Route path="/admin" element={<Admin />} />
       <Route path="/student" element={<Student />} />
       <Route path="/demandes/" element={<UserRecord />} />
       <Route path="/addDemande" element={<AddDemande />} />
       <Route path="/about" element={<About />} />

       <Route path="/resources/" element={<RecordList />} />
       <Route path="/user/" element={<UserList />} />
       <Route path="/all" element={<All />} />
       <Route path="/addResource" element={<AddResource />} />
       <Route path="/adduser" element={<Adduser />} />
       <Route path="/admin_edit/:id" element={<Edit />} />
     </Routes>
   </div>
 );
};
 
export default App;
