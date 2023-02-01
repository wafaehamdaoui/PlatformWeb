import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/login', {
        method: 'POST'
        });
        const data = await response.json();
        console.log("data",Array(data))
        if (data) {
          if(data[0]==="USER_ADMIN"){
            // redirect to the home page or wherever you want
            navigate("/users");
          }else{
            // redirect to the home page or wherever you want
            navigate("/resources");
          }
        } else {
            alert("user or password not fount");
        }
    } catch (err) {
        console.error(err);
    }
  };
  return (
    <div>
      <h2 style={{marginLeft:"39%",marginTop:"3%"}}> Page de Connexion</h2>
      <img src="login.jpg" style={{width:"15%",marginLeft:"50%"}} alt='login'></img>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection : "column", alignItems : "center" }}>
      <label htmlFor="username">Nom d'Utilisateur</label>
      <input
        class="form-control"
        type="text"
        id="username"
        name="username"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: "25%",marginBottom:"2%"}}
      />

      <label htmlFor="password">Mot de Passe</label>
      <input
        class="form-control"
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "25%", marginBottom:"2%"}}
      />
      <input  type="submit" value=" Se Connecter" style={{ cursor: "pointer"}} />
    </form>
    </div>
  );
}

export default Login;