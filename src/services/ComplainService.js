import axios from 'axios';

 const USER_REST_API = "http://localhost:8080/complain";

class ComplainService {

    postComplain(user){
       return  axios.post(`${USER_REST_API}/register`,user).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },
            (error)=>{
             console.log(error);
             console.log("error");
            }
   
        );
       
    }

    
 


}

export default new ComplainService();
//export const api =  USER_REST_API  ;