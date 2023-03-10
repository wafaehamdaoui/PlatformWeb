import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Adduser() {
	const [form, setForm] = useState({
		matricul:"",
	    email: "",
	    username:"",
		role: "",
	    password: "",
		
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
	    const res = await fetch("http://localhost:5000/adduser", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify(newUser),
	  })
	  const data = await res.json();
      if(data.rows>0){
		navigate("/user");
      }else{
		alert("Error: ORA-01031: privilèges insuffisants")
		navigate("/adduser");
      }
	}catch(error){
		window.alert(error);
		return;
	  };
	
	  setForm({ 
		matricul:"",
	    email: "",
	    username:"",
		role: "",
	    password: "", });
}
	return (
		<div>
			<h1 style={{marginLeft:"40%",marginTop:"5%"}}>Add New User </h1>
			<form onSubmit={onSubmit} style={{display: "flex", flexDirection : "column", alignItems : "center",marginTop:"3%" }}>
			<label htmlFor="matricul">Registration Number</label>
				<input
				    class="form-control"
					value={form.matricul}
					onChange={(e) => updateForm({ matricul: e.target.value })}
					type="text"
					placeholder="matricul"
					style={{ width: "40%",marginLeft:"5%", marginBottom:"0.5%"}}
				/>
				
				<label htmlFor="email">Email</label>
				<input
				    class="form-control"
					value={form.email}
					onChange={(e) => updateForm({ email: e.target.value })}
					type="email"
					placeholder="Email"
					style={{ width: "40%",marginLeft:"5%", marginBottom:"0.5%"}}
				/>
				
			<label htmlFor="username" >User Name</label>
				<input
				    class="form-control"
					value={form.username}
					onChange={(e) => updateForm({ username: e.target.value })}
					type="text"
					placeholder="username"
					style={{ width: "40%",marginLeft:"5%", marginBottom:"0.5%"}}
				/>
				
				
				<label htmlFor="password">Password</label>
				<input
				    class="form-control"
					value={form.password}
					onChange={(e) => updateForm({ password: e.target.value })}
					type="password"
					placeholder="Password"
					style={{ width: "40%",marginLeft:"5%", marginBottom:"0.5%"}}
				/>
		
				<label htmlFor="role">Role</label>
				<div className="col-md-6" style={{marginLeft:"15%"}}>
                <select aria-label="Default select example" style={{ width: "80%",marginRight:"20%"}} onSelect={(e) => updateForm({ role: e.target.value })} onChange={(e) => updateForm({ role: e.target.value })}>
				   <option >Select a role</option>
				   <option value="BASE" selected={form.role === "BASE"}>Base</option>
                   <option value="ADMIN" selected={form.role === "ADMIN"}>Admin</option>
                 </select>
                </div>
				<br />
				<input type="submit" value="Ajouter" style={{padding:"5px 15px"}}/>
			</form>
		</div>
	)
}
