import "../Main.css";
import swal from "sweetalert";
import React,{useState} from 'react';
import AdminService from '../services/AdminService';
const AdminRegister = () => {
    
    const regex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   // const regex2=/^([0-9])/;
  

    const [user, setUser] = useState({
        emailId:"",
        username:"",
        password:"",
        deptName:"",
        confirmPassword:""
    });

  const adminRegister = (e) => {
      e.preventDefault();
    if (user.emailId === "" ||
    user.username===""||
      user.password === ""||
      user.deptName === "")
    {
      swal("Oops!", "Please Fill Details!", "error");
      
    }
    
    else if (!regex.test(user.emailId))
    {
      swal("Error!","Please Enter Valid Email Address","error");
    } 
    else if(user.password.length< 6)
    {
      swal("!!","Please Enter password with minimum 6 characters");
    }
    
    else if(user.password!=user.confirmPassword)
    {
        swal("Error","Password Dont Match","error");
    }
    else {

        AdminService.postAdmin(user);
        console.log(user);
        setUser({emailId: "",
        password: "",
        username:"",
        deptName:"",
        confirmPassword:""
      })
      setTimeout(() => {
        swal("Success!", "Admin Registered successfully!", "success");
    }, 500); 
    }
  };
    return (
      <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
            <div class="card card-4">
                <div class="card-body">
                    <h2 class="title">Admin Registration Form</h2>
                    <form>

                        <div class="row row-space">
                            <div class="col-6">
                                <div class="input-group">
                                    <label class="label">Email</label>
                                    <input class="input--style-4" type="email" name="emailId" value={user.emailId}
                            onChange={(e) => setUser({ ...user, emailId: e.target.value })}/>
                                </div>
                            </div>
                            
                          </div>

                               <div class="col-6">
                            <div class="input-group">
                            <label class="label">Department Name</label>
                            
                            <div class="rs-select2 js-select-simple select--no-search">
                                  <select class="custom-select custom-select-lg  input--style-4"style={{width:'100%'}} onChange={(e) => setUser({...user, deptName:e.target.value})} selected={user.deptName} >
                                
                                    <option disabled="disabled" selected="selected" >Choose option</option>
                                    <option >General Suggestions</option>
                                   
                                    <option  >Unethical Issues</option>
                                    <option >Social Issues</option>
                                    
                                </select>
                               
                            </div>
                        </div>
                        </div>

                          <div class="col-6">
                                <div class="input-group">
                                    <label class="label"> Username</label>
                                    <input class="input--style-4" type="text" name="username" value={user.username}
                             onChange={(e) => setUser({ ...user, username: e.target.value })}/>
                                </div>
                            </div>
                        
                        
                        <div class="row row-space">
                        <div class="col-6">
                                <div class="input-group">
                                    <label class="label"> Password</label>
                                    <input class="input--style-4" type="password" name="password" value={user.password}
                             onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                                </div>
                            </div>
                        
                        
                            <div class="col-6">
                                <div class="input-group">
                                    <label class="label">Confirm Password</label>
                                    <input class="input--style-4" type="text" name="confirmPassword" value={user.confirmPassword}
                                      onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}/>
                                </div>
                            </div>
                            </div>


                        
                            <div class="d-flex justify-content-center">
                            <button class="btn btn-primary mr-2" type="submit" onClick={adminRegister}>Register</button>
                            <button class="btn btn-primary" type="reset" >Cancel</button>
                            </div>
                        
                        
                           
                          
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
     
    );
}

export default AdminRegister;