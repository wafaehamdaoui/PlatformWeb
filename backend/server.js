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
                user:'USER_Student',
                password:'654321',
                connectionString:'localhost/orcl'
            });
            const result = await connection.execute('SELECT * FROM sys.Ressource ');
            return result.rows;
        } catch (error){
            return error;

        }
    }
    fetchDataResources().then(dbRes =>{
        console.log('hi',dbRes)
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

app.post('/adduser',(req,res)=>{
    console.log("body",req.body)
    async function fetchDatausers(){
        try{
            const connection = await oracledb.getConnection({
                user:'user_admin',
                password:'123456',
                connectionString:'localhost/orcl'
            });
            const sqlQuery = `INSERT INTO employees VALUES (:1, :2)`;

            const result = await connection.executeMany(sqlQuery, req.body, {});
            console.log("Number of inserted rows:", result.rowsAffected);
            return result.rowsAffected;
        } catch (error){
            return error;

        }
    }
    fetchDatausers().then(dbRes =>{
        console.log('add',dbRes)
        res.send(dbRes)
    }).catch(err=>{
        res.send(err)
    })
})

app.listen(5000, () => {
    console.log('Server Listen to port 5000');
})