import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
const Record = (props) => (
 <tr>
   <td>{props.record[0]}</td>
   <td>{props.record[1]}</td>
   <td>{props.record[2]}</td>
   <td>{props.record[3]}</td>
   <td>{props.record[4]}</td>
   <td>{props.record[5]}</td>
   <td>{props.record[6]}</td>
   <td>{props.record[7]}</td>
   <td>{props.record[8]}</td>
   <td>
   <button className="btn btn-link"
     >
       Edit
     </button>| 
    <button className="btn btn-link"
     >
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
       const message = `Error: ORA-01045: l'utilisateur USER_STUDENT n'a pas le privilège CREATE SESSION ; connexion refusée `;
       window.alert(message);
       return;
     }
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 /*/ This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
   alert("Demande suprimée")
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 // This method will validare a record
 async function validateRecord(id) {
  await fetch(`http://localhost:5000/validate/${id}`, {
    method: "POST"
  });
  alert("Email sent to !!")
  //window.location.reload(true)  I tried this method by it give me a not found page that why i tried double navigate
  navigate("/admin")
  navigate("/admin/record")
}
// This method will reject a record
async function rejectRecord(id) {
  await fetch(`http://localhost:5000/reject/${id}`, {
    method: "POST"
  });
  alert("Email sent to !!")
  //window.location.reload()
  navigate("/admin")
  navigate("/admin/record")
}*/
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         //deleteRecord={() => deleteRecord(record._id)}
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
     <h3 >Users List
     </h3>
     <Table striped bordered hover variant="dark">
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