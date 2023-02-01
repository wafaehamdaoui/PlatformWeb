const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
const app = express();
app.use(cors());
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
            const result = await connection.execute('SELECT * FROM USER_ADMIN.Ressource ');
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
    async
})
app.listen(5000, () => {
    console.log('Server Listen to port 5000');
})