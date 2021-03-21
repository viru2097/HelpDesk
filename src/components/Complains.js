import "bootstrap/dist/css/bootstrap.css";

import '../Main.css';
import React,{ useState, useEffect, useCallback } from "react";
import ComplainService from '../services/ComplainService';
import swal from "sweetalert";
import axios from 'axios';
import {Button} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import {format} from "date-fns";
   
    
    
function Complains() {

    const history = useHistory();
    if(sessionStorage.getItem("User Data")===null)
    {
        swal("!!","Please Login First","error");
        history.push("/login");
    }

    const [complain, setComplain] = useState({
        date:"",
        type:null,
        priority:"",
        address:"",
        description:"",
        userId:0,
        file:File
       
      
    });

   

    // const uploadFile=(e) =>{
        
    //     setSelectedFiles(e.target.files)

    // };

    
   const registerComplaint=useCallback((e)=>{
    e.preventDefault();
       if(complain.date===""
       ||complain.type===""
       || complain.priority===""
       || complain.address===""
       || complain.description===""
       )
       {
        swal("Oops!", "Please Fill Details!", "error");
       }

       else
       {
        //    let variable2 = sessionStorage.getItem("User Data");
        //    variable2 = JSON.parse(variable2);

           // console.log(variable2.id);
           //setComplain({...complain,userId:variable2.id});
            console.log(complain);
           postlogineonServer(complain);

            // ComplainService.postComplain(complain);          
       }
   } ,[complain]);

   
   const checkdata=()=>{
    let variable2 = sessionStorage.getItem("User Data");
    variable2 = JSON.parse(variable2);   
    setComplain({...complain,userId:variable2.id});
    //console.log(complain);
   }
   const postlogineonServer= (data)=>{
       console.log(data);
       const formData = new FormData();
       formData.append("date",data.date);
       formData.append("type",data.type);
       formData.append("priority",data.priority);
       formData.append("address",data.address);
       formData.append("description",data.description);
       formData.append("userId",data.userId);
       console.log(data.file);
       formData.append("file",data.file);
       console.log(formData);

       axios({
           url:"http://localhost:8080/complain/register",
           method:"post",
           data:formData,
           headers: { "Content-Type": "multipart/form-data" },
       }).then(
        (response)=>{
          if(response){
              console.log('ere inside if-->', response)
                             swal("Success","Complain Registered Sucessfully","success");
                         }else{
              console.log('here inside else-->', response)
          
                             swal('Oops!',"Complain Register Failed","error");
                         }
           
        })
        .catch((error)=>{
        console.warn("Something went wrong");
      }
    )

    setComplain({
      date:"",
        type:null,
        priority:"",
        address:"",
        description:"",
        userId:0,
    })
  };
  //const {date}=complain.date;
//   console.log(complain);
return (
      <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680 bg bg-primary  ">
            <div class="card card-4 ">
                <div class="card-body ">
                    <h2 class="title">Complaint Registration Form</h2>
                    <form >

                        <div class="row row-space">
                            <div class="col-6">
                            <div class="input-group">
                                    <label class="label" htmlFor="cDate">Complaint Register Date</label>
                                    <div class="input-group-icon">
                                        
                                        <input class="input--style-4 js-datepicker" type="Date" name="RegisterDate"   value={complain.date} onChange={(e) => setComplain({ ...complain, date: e.target.value })}/>
                                        <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                        
                                    </div>
                                  
                                </div>
                                
                            </div>
                            <div class="col-6">
                            <div class="input-group">
                            <label class="label">Select Complaint Type</label>
                            
                            <div class="rs-select2 js-select-simple select--no-search">
                                  <select class="custom-select custom-select-lg  input--style-4"style={{width:'100%'}} onChange={(e) => setComplain({...complain, type:e.target.value})} selected={complain.type} >
                                
                                    <option disabled="disabled" selected="selected" >Choose option</option>
                                    <option value="3" >General Suggestions</option>
                                   
                                    <option value="2" >Unethical Issues</option>
                                    <option value="1">Social Issues</option>
                                    
                                </select>
                                {/* onChange={(e) => setComplain({ ...complain, complainType: e.target.value })} */}
                            </div>
                        </div>
                        </div>
                        </div>
                        <div class="row row-space">
                        <div class="col-6">
                            <div class="input-group">
                            <label class="label">Select Priority</label>
                                  <select class="custom-select custom-select-lg rs-select2 js-select-simple select--no-search input--style-4"
                                  style={{width:'100%'}}  
                                  onChange={(e) => setComplain({ ...complain, priority: e.target.value })}>
                                
                                    <option disabled="disabled" selected="selected">Choose option</option>
                                    <option value="General">General</option>
                                    <option value="Urgent">Urgent</option>
                                    <option value="Midrate">Midrate</option>

                                </select>
                                {/* onChange={(e) => setComplain({ ...complain, priority: e.target.value })} */}
                                </div>
                            </div>
                        
                
                        <div class="col-6">
                        <label class="label">Upload Attachment</label>
                            <div class="input-group">
                            
                            
                         <input class="custom-file" type="file" class="custom-file-input" id="inputGroupFile02"  
                         onChange={(e) => setComplain({ ...complain, file: e.target.files[0] })}
                        />
                          <label class="custom-file-label" for="inputGroupFile02">Choose file</label>
                         
                        </div>
                        </div>
                        </div>
                
                                        
                        
                    
                    <div class="row row-space">
                            <div class="col-6">
                                <div class="input-group">
                                    <label class="label mr-4">Address</label>
                                   <textarea class="input--style-4 border border-white"  cols="50"  style={{height: '100px'}} value={complain.address} 
                                   onChange={(e) => setComplain({ ...complain, address: e.target.value })}></textarea>
                                   </div>
                                 </div>
                                
                            
                        
                            <div class="col-6">
                                <div class="input-group">
                                    <label class="label">Description</label>
                                    <textarea class="input--style-4 border border-white"  cols="50"  style={{height: '100px'}} value={complain.description}
                                    onChange={(e) => setComplain({ ...complain, description: e.target.value })}></textarea>
                                    </div>
                                </div>
                            </div>
                        
                            
                           
                           
                            <input type="checkBox"  onChange={checkdata}/>
                             
                        
                            <div class="d-flex justify-content-center">
                            <button class="btn btn-primary mr-2" type="submit" onClick={registerComplaint} >Register</button>
                    
                            </div>
                        
                        
                            
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
     
    );
}
 
    export default Complains ;