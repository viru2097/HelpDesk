import React, { Component } from 'react'  
import BootstrapTable from 'react-bootstrap-table-next';  
import axios from 'axios';  

 export default  class Bootstraptab1 extends Component {  
        state = {  
                complains: [],  
                userId:0,
                columns: [{  
                  dataField: 'date',  
                  text: 'date'  

                },  
                {  
                  dataField: 'type',  
                  text: 'type',  
                    
                }, {  
                  dataField: 'Priority',  
                  text: 'Priority',  
                  sort: true  
                },  
                {  
                        dataField: 'Address',  
                        text: 'Address',  
                        sort: true  
                      },  
                      {  
                        dataField: 'description',  
                        text: 'description',  
                        sort: true  
                      },  
                      {  
                        dataField: 'status',  
                        text: 'status',  
                        sort: true  
                      }]  
              }  

               
              componentDidMount() {    
                axios.get('http://localhost:8080/complain/userComplaint').then(response => {    
                  console.log(response.data);    
                  this.setState({    
                        complains: response.data    
                  });    
                });    
              }   

              checkdata=()=>{
                let variable2 = sessionStorage.getItem("User Data");
                variable2 = JSON.parse(variable2);   
                this.setState({...this.state,userId:variable2.id});
                console.log(this.state);
               }
        render() {  
               
                return (  
                        <div className="container">  
                        <div class="row" className="hdr">    
                        <div class="col-sm-12 btn btn-info">    
                       Complaints
                        <a href="./components/Examplemodal">
                        <button class="btn btn-success">Check status</button>  
                        </a>  
                         </div>    
                          </div>   
                          <div>
                              <input type="checkbox" onChange={this.checkdata}/>
                          </div>
                        <div className="container" style={{ marginTop: 50 }}>  
                        <BootstrapTable   
                        striped  
                        hover  
                        keyField='id'   
                        data={ this.state.complains }   
                        columns={ this.state.columns }   
                        />
                        
                      </div>  
                      </div>  
                )  
        }  
}