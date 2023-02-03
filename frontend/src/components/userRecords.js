import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
const Record = (props) => (
 <tr>
   <td>{props.record[0]}</td>
   <td>{props.record[1]}</td>
   <td>{props.record[2]}</td>
   <td>{props.record[3]}</td>
   <td>{props.record[4]}</td>
   <td>{props.record[5]}</td>
   <td>{props.record[6]}</td>
   <td>
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     ><img src="no.jpg" style={{width:"20px"}} alt="g"></img>
       Annuler
     </button>
   </td>
 </tr>
);
 
export default function UserRecord() {
 const [records, setRecords] = useState([]);
 const navigate = useNavigate();
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/userRecord`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/delete/${id}`, {
     method: "DELETE"
   });
 
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
     <h3 style={{marginTop:"2%" , marginLeft:"37%"}}>My Resevations
     <a href="/addDemande" ><img src="add.png" style={{width:"5%",marginLeft:"65%"}} alt="r"></img></a>
     </h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
         <th>Id_Reservation</th>
           <th>Registration_Number</th>
           <th>Name</th>
           <th>Resource</th>
           <th>Duration</th>
           <th>Date</th>
           <th>Status</th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}
