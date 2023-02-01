import React from 'react'
import axios from 'axios'
const RessourceList = () => {
    const [data,setData] = React.useState([]);
    React.useEffect(()=>{
        axios('http://localhost:5000/resources').then(response=>{
            if(response.status===200){
                const fetchData = response.data.rows;
                setData(fetchData)
            }
        }).catch(err=>{

        })
    })
  return (
    <div>RessourceList
        {
        data.length>0 && data.map((item)=>
            <div>{item}</div> )
        } </div>
  )
}

export default RessourceList