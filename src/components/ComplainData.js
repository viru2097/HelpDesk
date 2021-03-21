import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ComplainData(){

    const[complain,setComplain]=useState([]);
    const [tableData, setTableData] = useState([]);

    useEffect(()=>{
        checkdata()
    },[])


    const checkdata=()=>{
        let variable2 = sessionStorage.getItem("User Data");
        variable2 = JSON.parse(variable2);   
        setComplain({...complain,userId:variable2.id});
        postlogineonServer({userId:variable2.id})
       }

       const postlogineonServer= (data)=>{
        axios.post(`http://localhost:8080/complain/userComplaint`,data).then(
          (response)=>{
                console.log(response.data);
                setTableData(response.data)
          }) .catch((error)=>{
            console.warn("Something went wrong");
          })
        }
    return (
        <>
        
        <ul style={{color:"red"}}>
            <li>ME</li>
            <li>Mee</li>
       {/* tableData.map(item => ({
        <li key={item.id}></li>  
})); */}
   </ul>


        {/* <div>
            {tableData[0].complain_Id}
            <label>{tableData[1].description}</label>
            <label>{tableData[2].status}</label>
        </div> */}
        </>
    )

}

export default ComplainData;