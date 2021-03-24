import React from 'react';
import '../index1.css';
import { NavLink } from 'react-router-dom';
import web from '../images/w10.png';
import Contact from './Contact';

const Commons=(props)=> {
  return (
    <div class="container-fluid"  style={{background:"white",color:"black",fontFamily:"sans-serif",width:"100%"}}>
 <section id="header" className="d-flex align-items-center">
 <div className="container fluid nav_bg">
 <div className="row">
 <div className="col mx-auto">
 <div className="row">
  
 <div className="col-md-6 pt-5 pt-lg-4 order-2 order-lg-1 d-flex justify-content-center flex-column">
 {/* <h1>{props.name}</h1> */}
 <h2><b>How can we help you?</b></h2>
 <h4 className="my-3" >
 Freshdesk is a online helpdesk platform where in we offer instant resolution to all kinds of customer queries related to social, general,municipal and others. To know more ,kindly get in touch with our representative
 </h4>

 <div className="mt-3">
 
 <NavLink to="./Contact" className="btn btn-primary  m-9 p-2 w-40" >{props.btname}</NavLink>

 </div>
 
 </div>
 <div className="col-lg-6 order-l order-lg-2 header-img">
 <img src={props.imgsrc} style={{width:"650px",height:"450px"}}  className="img-fluid animated"></img>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 </div>
  );
}

export default Commons;