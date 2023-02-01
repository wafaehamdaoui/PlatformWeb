import React from 'react'
import axios from 'axios'
const RessourceList = () => {
    const [data,setData] = React.useState([]);
    React.useEffect(()=>{
        axios('http://localhost:5000/resources').then(response=>{
            if(response.status===200){
                const fetchData = response.data.rows;
                console.log('fetchdata',fetchData)
                setData(fetchData)
            }
        }).catch(err=>{

        })
    })
  return (
    <div>RessourceList
        {
        
            <div>{data.map()}</div> 
        } </div>
  )
}

export default RessourceList