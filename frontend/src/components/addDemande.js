import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddDemande() {
	const [form, setForm] = useState({
		matricul:"",
	    name:"",
		resource: "",
		duree:"",
		date: "",
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
	    const res = await fetch("http://localhost:5000/addDemande", {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify(newUser),
	  })
	  const data = await res.json();
      if(data.rows>0){
		navigate("/demandes");
      }else{
		alert(data.error)
      }
	}catch(error){
		window.alert(error);
		return;
	  };
	
	  setForm({ 
        matricul:"",
	    name:"",
		resource: "",
		duree:"",
		date: "",});
}
	return (
		<div>
			<h1 style={{marginLeft:"34%",marginTop:"5%"}}>Add New Resevation </h1>
			<form onSubmit={onSubmit} style={{display: "flex", flexDirection : "column", alignItems : "center",marginTop:"3%" }}>
			<label htmlFor="matricul">Registration_Number</label>
				<input
				    class="form-control"
					value={form.id}
					onChange={(e) => updateForm({ matricul: e.target.value })}
					type="text"
					placeholder="matricul"
					style={{ width: "40%",marginLeft:"5%", marginBottom:"0.5%"}}
				/>
				
				<label htmlFor="name">Student_Name</label>
				<input
				    class="form-control"
					value={form.name}
					onChange={(e) => updateForm({ name: e.target.value })}
					type="text"
					placeholder="name"
					style={{ width: "40%",marginLeft:"5%", marginBottom:"0.5%"}}
				/>
				<label htmlFor="Resource">Resource</label>
				<div className="col-md-6" style={{marginLeft:"15%"}}>
                <select aria-label="Default select example" style={{ width: "80%",marginRight:"20%",height:"38px"}} onSelect={(e) => updateForm({ resource: e.target.value })} onChange={(e) => updateForm({ resource: e.target.value })}>
				   <option >Select a resource</option>
				   <option value="Labo_Reality_Vertual" selected={form.resource === "Labo_Reality_Vertual"}>Base</option>
                   <option value="Labo_AI" selected={form.resource === "Labo_AI"}>Labo_AI</option>
                   <option value="Labo_Robotique" selected={form.resource === "Labo_Robotique"}>Labo_Robotique</option>
                   <option value="Bibliotheque" selected={form.resource === "LabBibliothequeo_AI"}>Bibliotheque</option>
                   <option value="Salle_Music" selected={form.resource === "Salle_Music"}>Salle_Music</option>
                   <option value="Salle_Multisports" selected={form.resource === "Salle_Multisports"}>Salle_Multisports</option>
                   <option value="Table_Tennis" selected={form.resource === "Table_Tennis"}>Table_Tennis</option>
                   <option value="Terrain_VollyBall" selected={form.resource === "Terrain_VollyBall"}>Terrain_VollyBall</option>
                   <option value="Terrain_HandBall" selected={form.resource === "Terrain_HandBall"}>Terrain_HandBall</option>
                   <option value="Terrain_BasketBall" selected={form.resource === "Terrain_BasketBall"}>Terrain_BasketBall</option>
                   <option value="Terrain_FootBall" selected={form.resource === "Terrain_FootBall"}>Terrain_FootBall</option>
                 </select>
                </div>
			<label htmlFor="duree" >Duration</label>
				<input
				    class="form-control"
					value={form.duree}
					onChange={(e) => updateForm({ duree: e.target.value })}
					type="text"
					placeholder="duree"
					style={{ width: "40%",marginLeft:"5%", marginBottom:"0.5%"}}
				/>
                <label htmlFor="date" >Date</label>
				<input
				    class="form-control"
					value={form.date}
					onChange={(e) => updateForm({ date: e.target.value })}
					type="date"
					placeholder="date"
					style={{ width: "40%",marginLeft:"5%", marginBottom:"0.5%"}}
				/>
				<br />
				<input type="submit" value="Ajouter" style={{padding:"5px 15px"}}/>
			</form>
		</div>
	)
}
