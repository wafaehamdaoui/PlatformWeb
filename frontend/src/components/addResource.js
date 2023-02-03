import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddResource() {
	const [form, setForm] = useState({
		id:"",
	    name:"",
		location: "",
		
	});
	const navigate = useNavigate();
	
	// These methods will update the state properties.
	function updateForm(value) {
	  return setForm((prev) => {
		return { ...prev, ...value };
	  });
	}
	
	// This function will handle the submission.
	async function onSubmit(e) {
	  e.preventDefault();
	
	  // When a post request is sent to the create url, we'll add a new record to the database.
	  const newUser = { ...form };
	    try{
	    const res = await fetch("http://localhost:5000/addResource", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify(newUser),
	  })
	  const data = await res.json();
      if(data.rows>0){
		navigate("/resources");
      }else{
		alert(data.error)
      }
	}catch(error){
		window.alert(error);
		return;
	  };
	
	  setForm({ 
        id:"",
        name:"",
        location: "",});
}
	return (
		<div>
			<h1 style={{marginLeft:"34%",marginTop:"5%"}}>Add New Resource </h1>
			<form onSubmit={onSubmit} style={{display: "flex", flexDirection : "column", alignItems : "center",marginTop:"3%" }}>
			<label htmlFor="id">Resource_Id</label>
				<input
				    class="form-control"
					value={form.id}
					onChange={(e) => updateForm({ id: e.target.value })}
					type="text"
					placeholder="id"
					style={{ width: "40%",marginLeft:"5%", marginBottom:"0.5%"}}
				/>
				
				<label htmlFor="name">Resource_Name</label>
				<input
				    class="form-control"
					value={form.name}
					onChange={(e) => updateForm({ name: e.target.value })}
					type="text"
					placeholder="name"
					style={{ width: "40%",marginLeft:"5%", marginBottom:"0.5%"}}
				/>
				
			<label htmlFor="username" >Resource_location</label>
				<input
				    class="form-control"
					value={form.location}
					onChange={(e) => updateForm({ location: e.target.value })}
					type="text"
					placeholder="location"
					style={{ width: "40%",marginLeft:"5%", marginBottom:"0.5%"}}
				/>
				<br />
				<input type="submit" value="Ajouter" style={{padding:"5px 15px"}}/>
			</form>
		</div>
	)
}
