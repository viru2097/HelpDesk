import React from 'react';
import Commons from './Commons';
import web1 from '../images/Desk1.png';
import {useState,render} from 'react-dom';
import {Carousel} from 'react-bootstrap';
import Carosel2 from '../images/Carosel2.jpg';
import Img2 from '../images/Img2.jpg';
import Carousel1 from '../images/Carousel1.jpg';
import '../footer.css';
import {useHistory} from 'react-router-dom';
import swal from 'sweetalert';


const Home=()=> {


  return (
    <div className="container-fluid">
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img2}
      alt="First slide"
      style={{height:"500px",width:"1000px"}}
    />
    <Carousel.Caption style={{color:"black"}}>
      <h3><b>Help Desk</b></h3>
      <p><b><span style={{fontSize:30}}>See how help desk can simplify your customer support.</span></b></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Carosel2}
      alt="Second slide"
      style={{height:"500px",width:"100%"}}

    />

    <Carousel.Caption style={{color:"black"}}>
      <h3><b>Help Desk</b></h3>
      <p><b style={{fontSize:30}}>Servicing on Voice is a new Skill</b></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Carousel1}
      alt="Third slide"
      style={{height:"500px",width:"100%"}}

    />

    <Carousel.Caption style={{color:"black"}}>
      <h3><b>Help Desk</b></h3>
      <p><b style={{fontSize:30}}>Handling tough Tasks through Voice</b></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className="container">
<Commons name='How can we help you?' imgsrc={web1} style={{margintop:"-250px",width:"350px",height:"450px"}} visit='/Home' btname='Contact now'></Commons>
  </div>
  <div class="container-fluid mx-auto ">
    <div class="row justify-content-center top-part">
        <div class="col-md-6 text-center center-content">
            <div class="d-flex-inline" >
                <h3 class="footer-heading">Web Help Desk</h3>
            </div>
            <div class="d-flex-inline"><p>Help desk has a point of contact for customers to send their queries and a ticketing system that tracks and organizes issues for faster resolution.</p>
            </div>
            <a href="./Complains">

            <div class="d-flex-inline pt-2"> <button class="btn-pink btn">Register complaint</button> </div>
            </a>
          
        </div>
    </div>
    <div class="row">
        <div class="line mb-3 mx-auto"></div>
        <div class="d-md-flex px-5 justify-content-around bd-highlight col-md-12 pt-5 pb-5 mb-3">
            <div class="p-2 flex-fill bd-highlight mb-5 mb-md-0">
                <h3>Help Desk</h3> <small>Copyright &copy 2021</small>
            </div>
            <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                <h5 class="places">Address</h5>
                <p class="mb-0">"HELP DESK",Pride Icon,</p>
                <p class="mb-0">Office No15,Kharghar</p>
                <p class="mb-0">Navi Mumbai,Maharashtra</p>
            </div>
            <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                <h5 class="places">About Company</h5>
                <p class="mb-0">We at help desk provide help</p>
                <p class="mb-0">desk for all queries </p>
                <p class="mb-0">of common people.</p>
            </div>
            <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                <h5 class="places">Map Location</h5>
                <p class="mb-0">Will update soon</p>
                <p class="mb-0"></p>
                <p class="mb-0"></p>
            </div>
            <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                <h5 class="places">Contact Us</h5>
                <p class="mb-0">Kindly reach us on email given below</p>
                <p class="mb-0"></p>
                <p class="mb-0"></p>
            </div>
            <div class="p-2 flex-fill bd-highlight mb-3 mb-md-0">
                <h5 class="places"></h5>
                <p class="mb-0"></p>
            </div>
        </div>
        <div class="line mb-3 mx-auto"></div>
    </div>
    <div class="row bottom-part">
        <div class="d-lg-flex justify-content-between bd-highlight col-md-12 mb-5 px-5">
            <div class="p-2 align-self-center flex-fill bd-highlight">
                <div class="fa fa-facebook px-2"></div>
                <div class="fa fa-linkedin px-2"></div>
                <div class="fa fa-twitter px-2"></div>
                <div class="fa fa-instagram px-2"></div>
            </div>
            <div class="p-2 row flex-fill bd-highlight justify-content-left">
                <div class="p-2 d-lg-flex">
                    <div class="p-2 flex-fill d-flex bd-highlight"><a href="/Home">Home</a></div>
                    <div class="p-2 flex-fill d-flex bd-highlight"><a href="/About">About Us</a></div>
                    <div class="p-2 flex-fill d-flex bd-highlight"><a href="/Services">Services</a></div>
                    <div class="p-2 flex-fill d-flex bd-highlight"><a href="/Complaints">Complaints</a></div>
                    <div class="p-2 flex-fill d-flex bd-highlight"><a href="/Contact Us">Contact Us</a></div>
                    <div class="p-2 flex-fill d-flex bd-highlight"><a href="/Feedback">Feedback</a></div>
                   
                
                </div>
            </div>
            <div class="p-2 align-self-center flex-fill bd-highlight">
                <div class="fa fa-envelope-o px-2 grey-text">&nbsp;&nbsp;info@helpdesk.in</div>
            </div>
        </div>
    </div>
</div>
</div>



  );

//}
}



export default Home;