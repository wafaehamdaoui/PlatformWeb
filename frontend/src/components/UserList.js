import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
const Record = (props) => (
 <tr>
   <td>{props.record[0]}</td>
   <td>{props.record[1]}</td>
   <td>{props.record[2]}</td>
   <td>
    <button className="btn btn-link"
     ><img src="delete.png" style={{width:"20px"}} alt="g"></img>
       Delete
     </button>
   </td>
 </tr>
);
 
export default function UserList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/users`);
     const records = await response.json();
     if (!(records instanceof Array)) {
       const message = `Error: ORA-01045: l'utilisateur n'a pas ce privilège `;
       window.alert(message);
       return;
     }
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
   alert("user suprimée")
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         //validateRecord={() => validateRecord(record._id)}
         //rejectRecord={() => rejectRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3 style={{marginLeft:"40%", marginTop:"2.5%"}}>Users List
     <a href="/adduser" ><img src="add.png" style={{width:"5%",marginLeft:"70%"}} alt="r"></img></a>
     </h3>
     <Table striped bordered hover >
      <thead>
        <tr>
           <th>User_Id</th>
           <th>User_Name</th>
           <th>User_Created</th>
           <th>Actions</th>
           </tr>
      </thead>
       <tbody>{recordList()}</tbody>
    </Table>
   </div>
 );
}