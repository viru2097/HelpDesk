import React from 'react';
// import Commons from './Commons';
import 'bootstrap/dist/css/bootstrap.css';

import '../App.css'
import helpDesk from '../images/helpDesk.jpeg';


const About=()=> {
  return (
    <div /*style={{backgroundColor: "lightgreen ", widhth:200}}*/>
    <div >

    <div className="container-fluid font-white">
 
    <div class="text-dark px-4 py-2 rounded" ><center><h1 style={{color: "red"}}>About Us</h1></center></div>
                       <br></br>
           <div className="row">

             <div className="col-5  d-flex justify-content-center"> 
             <img style={{height:"450px" ,width:"450px"}} src={helpDesk} alt="web1"></img>
              </div>

              <div className="col-7 d-flex justify-content-center   "> 
              <h5><div>Online Help Desk Management system is web application and one touch solution that provides interface through which a user/person can raise a complaint against general /social/unethical issues that are happening in their surrounding to a Main Admin (government officer).</div>
              <div> </div> 
               <div>Many a times it is observe that such a complaints /issues are not been addressed and our website will (this software) provides facility for reporting online issues related to public services, general and unethical issues which can be addressed and resolved by online. </div>
               <div>Any Number of users can connect to the server. Each user first makes their login to sever and register a complaint/issues to show their availability. Admin assigns that issues to the government officer depending on criteria (admin). The server can be any Web Server. In this application we can easily track all the complaint details, criminal details, FIR Details etc. online.</div></h5>
              </div>
        
        </div> 
      </div> 

</div>
</div>
  );
}

export default About;
