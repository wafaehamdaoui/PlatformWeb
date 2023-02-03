import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
const Record = (props) => (
 <tr>
   <td>{props.record[0]}</td>
   <td>{props.record[1]}</td>
   <td>{props.record[2]}</td>
   
 </tr>
);
 
export default function See() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/resources`);
     const records = await response.json();
     if (!(records instanceof Array)) {
       const message = `Error: ORA-01045: l'utilisateur USER_STUDENT n'a pas ce privilège `;
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
   await fetch(`http://localhost:5000/resource/${id}`, {
     method: "DELETE"
   });
   alert("Demande suprimée")
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
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3 style={{marginLeft:"40%", marginTop:"2.5%"}}>Resources List
     </h3>
     <Table striped bordered hover >
      <thead >
        <tr>
           <th>Resource_Id</th>
           <th>Resource_Name</th>
           <th>Resource_location</th>
           </tr>
      </thead>
       <tbody>{recordList()}</tbody>
    </Table>
   </div>
 );
}