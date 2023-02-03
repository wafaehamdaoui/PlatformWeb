const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
app.use(cors());
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/resources',(req,res)=>{
    async function fetchDataResources(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const result = await connection.execute('SELECT * FROM sys.Ressource');
            return result.rows;
        } catch (error){
            return error;

        }
    }
    fetchDataResources().then(dbRes =>{
        res.send(dbRes);
    }).catch(err=>{
        res.send(err)
    })
})
app.get('/users',(req,res)=>{
    async function fetchDatausers(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const result = await connection.execute("SELECT user_id,username,created FROM ALL_USERS where EXTRACT( YEAR FROM created)=2023");
            return result.rows;
        } catch (error){
            return error;

        }
    }
    fetchDatausers().then(dbRes =>{
        console.log('hi',dbRes)
        res.send(dbRes)
    }).catch(err=>{
        res.send(err)
    })
})

app.get('/userRecord',(req,res)=>{
    const username='wafae'
    async function fetchDataResources(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const result = await connection.execute("SELECT * FROM sys.Demandes where student='"+username+"'");
            return result.rows;
        } catch (error){
            return error;

        }
    }
    fetchDataResources().then(dbRes =>{
        console.log('demandes',dbRes)
        res.send(dbRes);
    }).catch(err=>{
        res.send(err)
    })
})
app.get('/allRecord',(req,res)=>{
    async function fetchDataResources(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const result = await connection.execute('SELECT * FROM sys.Demandes');
            return result.rows;
        } catch (error){
            return error;

        }
    }
    fetchDataResources().then(dbRes =>{
        console.log('demandes',dbRes)
        res.send(dbRes);
    }).catch(err=>{
        res.send(err)
    })
})

app.post('/login',(req,res)=>{
  const { username, password } = req.body;
  async function comparePassword(enteredPassword, storedPassword) {
    try {
      const match = await bcrypt.compare(enteredPassword, storedPassword);
      if (match) {
        console.log('Password matches');
      } else {
        console.log('Password does not match');
      }
    } catch (err) {
      console.error(err);
    }
  }
    console.log("body",req.body)
    async function fetchDatausers(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const result = await connection.execute("SELECT username,passwd,rol from sys.my_users where username='"+username+"' and passwd='"+password+"'");
            return result.rows;
        } catch (error){
            return error;

        }
    }
    fetchDatausers().then(dbRes =>{
        console.log('users',dbRes[0])
        if (dbRes) {
            const result ={username:dbRes[0][0],password:dbRes[0][1],role:dbRes[0][2]}
            res.json(result)
        } else {
            res.json({Error:err})
        }
        
    }).catch(err=>{
        res.send(err)
    })
})



app.post('/addResource',(req,res)=>{
    const {id,name ,location} = req.body;
    async function fetchDatausers(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const result0 = await connection.execute('alter session set "_oracle_script"=true');
            const result = await connection.execute("INSERT INTO sys.Ressource VALUES ("+parseInt(id)+",'"+name+"','"+location+"')");
            console.log("Number of inserted rows:", result.rowsAffected);
            return result.rowsAffected;
        } catch (error){
            return error;
           
        }
    }
    fetchDatausers().then(dbRes =>{
        console.log('add',dbRes)
        res.json({rows:dbRes})
    }).catch(err=>{
        res.json({error:err})
    })
})

app.post('/adduser',(req,res)=>{
    const {matricul,email ,username, role, password } = req.body;
    console.log("body",username)
    user = toString(username)
    async function fetchDatausers(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const result0 = await connection.execute('alter session set "_oracle_script"=true');
            if (role=="ADMIN") {
               // const result1 = await connection.execute('grant admin_role to'+username);
            } else {
               // const result2 = await connection.execute('grant student_role to'+username);
            }
            const result3 = await connection.execute('create user '+username+' identified by "'+password+'"');
            const result = await connection.execute("INSERT INTO sys.my_users VALUES ("+parseInt(matricul)+",'"+email+"','"+username+"','"+role+"','"+password+"')");
            console.log("Number of inserted rows:", result.rowsAffected);
            return result.rowsAffected;
        } catch (error){
            return error;
           
        }
    }
    fetchDatausers().then(dbRes =>{
        console.log('add',dbRes)
        res.json({rows:dbRes})
    }).catch(err=>{
        res.json({error:err})
    })
})


app.post('/addDemande',(req,res)=>{
    let i=0;
    const {matricul,name ,resource, duree, date } = req.body;
    var datee = new Date(date);
    async function fetchDatausers(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const result0 = await connection.execute('alter session set "_oracle_script"=true');
            const result = await connection.execute("INSERT INTO sys.Demandes VALUES (1,"+parseInt(matricul)+",'"+name+"','"+resource+"','"+duree+"','"+date+"',Waiting)");
            console.log("Number of inserted rows:", result.rowsAffected);
            i+=1;
            return result.rowsAffected;
        } catch (error){
            return error;
           
        }
    }
    fetchDatausers().then(dbRes =>{
        console.log('add',dbRes)
        res.json({rows:dbRes})
    }).catch(err=>{
        res.json({error:err})
    })
})


app.post('/demande',(req,res)=>{
    console.log("body",username)
    user = toString(username)
    async function fetchDatausers(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const result0 = await connection.execute('alter session set "_oracle_script"=true');
            const result = await connection.execute("INSERT INTO sys.my_users VALUES ("+parseInt(matricul)+",'"+email+"','"+username+"','"+role+"','"+password+"')");
            console.log("Number of inserted rows:", result.rowsAffected);
            return result.rowsAffected;
        } catch (error){
            return error;
           
        }
    }
    fetchDatausers().then(dbRes =>{
        console.log('add',dbRes)
        res.json({rows:dbRes})
    }).catch(err=>{
        res.json({error:err})
    })
})

// This section will help us get a single record by id
app.get("/record/:id",function (req, res) {
    let myquery = { _id: ObjectId(req.params.id) };
        async function fetchDatausers(){
            try{
                const connection = await oracledb.getConnection({
                    user:'user_admin',
                    password:'123456',
                    connectionString:'localhost/orcl'
                });
                const result = await connection.execute("SELECT * from sys.Demandes where ident="+parseInt(myquery)+"");
                return result.rows;
            } catch (error){
                return error;
    
            }
        }
        fetchDatausers().then(dbRes =>{
            res.json(dbRes);
        }).catch(err=>{
            res.json({error:err})
        })
});

// This section will help us update a record by id.
app.post("/edit/:id",function (req, response) {
    let myquery = { _id: ObjectId(req.params.id) };
   
});

// This section will help us delete a record by id
app.get("/record/:id",(req, res) => {
    let myquery = { _id: ObjectId(req.params.id) };
    async function fetchDatausers(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const result0 = await connection.execute('alter session set "_oracle_script"=true');
            const result = await connection.execute("select * from sys.Demandes where id= "+parseInt(myquery));
            console.log("Number of inserted rows:", result.rowsAffected);
            return result.rows;
        } catch (error){
            return error;
           
        }
    }
    fetchDatausers().then(dbRes =>{
        console.log('add',dbRes)
        res.json(dbRes)
    }).catch(err=>{
        res.json({error:err})
    })
});
app.delete("/delete/:id",(req, res) => {
    let myquery = { _id: ObjectId(req.params.id) };
    async function fetchDatausers(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const result0 = await connection.execute('alter session set "_oracle_script"=true');
            const result = await connection.execute("delete from sys.Demandes where id= "+parseInt(myquery));
            return result;
        } catch (error){
            return error;
           
        }
    }
    fetchDatausers().then(dbRes =>{
        console.log('add',dbRes)
        res.json(dbRes)
    }).catch(err=>{
        res.json({error:err})
    })
});

app.listen(5000, () => {
    console.log('Server Listen to port 5000');
})