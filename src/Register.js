import "bootstrap/dist/css/bootstrap.css";

import './App.css';

    import React from 'react'

    import { useState, useEffect } from "react";
    import swal from "sweetalert";

    


const Register = () => {

    const regex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const regex1=/^([a-zA-Z])/;
    const regex2=/^([0-9])/;
    const regex3=/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s[0-9]{4}$/;

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username:"",
        email: "",
        password: "",
        mobile:"",
        UIDnumber :"",
      });

      const syncFirstName = (e) => setUser({ ...user, firstName: e.target.value });
  const syncLastName = (e) => setUser({ ...user, lastName: e.target.value });
  const syncUserName = (e) => setUser({ ...user, username: e.target.value });
  const syncEmail = (e) => setUser({ ...user, email: e.target.value });
  const syncPassword = (e) => setUser({ ...user, password: e.target.value });
  const syncMobile = (e) => setUser({...user,mobile:e.target.value});
  const syncUIDNumber = (e) => setUser({...user,UIDNumber:e.target.value})
  const registerUser = () => {
    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.password === ""||
      user.mobile === ""||
      user.UIDNumber==="")
    {
      swal("Oops!", "Please Fill Details!", "error");
      return;
    }
    else if(!regex1.test(user.firstName)){
        swal("Error!","Please Enter Valid name","error");
    }
    else if(!regex1.test(user.lastName)){
        swal("Error!","Please Enter Valid name","error");
    }

    else if (!regex.test(user.email))
    {
      swal("Error!","Please Enter Valid Email Address","error");
    } 
    else if(user.password.length< 6)
    {
      swal("!!","Please Enter password with minimum 6 characters");
    }
    else if(!regex2.test(user.mobile.length<10)){
        swal("!!","Please Enter mo with minimum 10 characters");
        
    }
    else if (!regex2.test(user.length<12)){
        swal("!!","Please Enter UID Number with minimum 12 characters");
        
    }
    else {
      swal("Success!", "Registered successfully!", "success");
    }
  };
    return (

        <div className=" container-fluid ">

           
                <div style={{ textAlign: "center", color: "aqua" }}><h1><br /><b>!!...User Registrtion...!!</b></h1></div>

                <form class="row g-3 d-flex flex-column justify-content-center align-items-center" style={{ padding: "48px", }} >

                    <div class="col-md-3" style={{ color: "Yellow" }}>
                        <label for="validationDefault01" class="form-label"><strong>First Name</strong></label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Enter Your first Name" value={user.firstName}
              onChange={syncFirstName}  />
                    </div>
                    
                    <div class="col-md-3" style={{ color: "Yellow" }}>
                        <label for="validationDefault01" class="form-label"><strong>Last Name</strong></label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Enter Your Last Name " value={user.lastName}
              onChange={syncLastName}  />
                    </div>

                    <div class="col-md-3" style={{ color: "Yellow" }}>
                        <label for="validationDefault01" class="form-label"><strong>Create UserName</strong> </label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Create Username" value={user.username}
              onChange={syncUserName}  />
                    </div>


                    <div class="col-md-3" style={{ color: "Yellow" }}>
                        <label for="exampleFormControlInput1" class="form-label"><strong>Email Address</strong></label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="Ex. name@example.com" value={user.email}
                            onChange={syncEmail}/>
                    </div>

                              
                   
                    <div class="col-md-3 mt-2" style={{ color: "Yellow" }}>
                        <label for="validationDefault04" class="form-label"><strong>Select UID Type</strong></label>
                        <select class="custom-select" id="validationDefault04" >
                            <option selected disabled value="">Select</option>
                            <option>Aadhar Card</option>
                            <option>PAN Card</option>
                           
                        </select>
                    </div>


                    <div class="col-md-3 mt-2" style={{ color: "Yellow" }}>
                        <label for="validationDefault01" class="form-label"><strong>UID Number</strong></label>
                        <input type="text" class="form-control" id="validationDefault01" placeholder="Enter UID number"  value={user.UIDnumber}
                            onChange={syncUIDNumber}  />
                    </div>

                    



                    <div class="col-md-3 mt-2" style={{ color: "Yellow" }}>
                        <label for="exampleFormControlInput1" class="form-label"><strong>Mobile Number</strong></label>
                        <input type="number" class="form-control" id="exampleFormControlInput1"  value={user.mobile}
                            onChange={syncMobile}/>

                    </div>

                    
                    <div class="col-md-3 mt-2" style={{ color: "Yellow" }}>
                        <label for="exampleFormControlInput1" class="form-label"><strong>Create Password</strong></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" value={user.password}
              onChange={syncPassword} />

                    </div>

                    
                    <div class="col-md-3 mt-2" style={{ color: "Yellow" }}>
                        <label for="exampleFormControlInput1" class="form-label"><strong>Confirm Password</strong></label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" />

                    </div>

                    
                    <div class="col-12 d-flex justify-content-center mt-4 ">
                        <div>
                        <button class="btn btn-primary mr-2" type="submit" onClick={registerUser}>Register</button>
                        {/* <NavLink to="/homepage" class="btn btn-primary d-flex justify-content-center">Submit</NavLink> */}
                    </div>
                    

                    <div>
                       
                        <button class="btn btn-primary" type="reset" >Cancel</button>
                        {/* <NavLink to="/homepage" class="btn btn-primary d-flex justify-content-center">Submit</NavLink> */}
                    </div>
                    

                    <div class="d-flex justify-content-center text-primary" >
					<a href="login.js" class="btn btn-link text-sucess ">Sign In Here...</a> 
				    </div>
                    </div>
                </form>
            
        </div>
    );
}
export default Register;
