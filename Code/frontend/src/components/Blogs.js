import React, { useState } from "react";
import axios from "axios";



   export function   Blogs(){

           const [username,setUsername]=useState("");
           const [password,setPassword]=useState("");
           const [myCar, setMyCar] = useState("");
           const handleChange = (event) => {
            setMyCar(event.target.value)
          }
    
           
           function  sendData(e){
               e.preventDefault();

               const newStudent={
                    
                username,
                password


               }

               axios.post("http://localhost:8070/student/addStudent",newStudent).then(()=>{
                       
                     alert("Student Added")

               }).catch((err)=>{
                      alert(err)
               })

           }

 




      return(

        <form onSubmit={sendData}>

          <button type="submit" class="btn btn-primary">Submit assingment</button>
        <div class="primary">
           <label for="password">Studentname</label>
          <input type="text" class="form-control" id="password" aria-describedby="emailHelp"placeholder="Enter your name"
             onChange={(e)=>{


                 setPassword(e.target.value);

             

              }}  />
          
          
          
          
        </div>
      
      
        <div class="mb-3">
          <label for="username">username</label>
          <input type="text" class="form-control" id="username" placeholder="Enter password"
           
             onChange={(e)=>{
                       
                setUsername(e.target.value);



             }} />
          
          
        



        </div>
        <div className="mb-3">
        <select  value={myCar} onChange={handleChange} class="form-select form-select-sm"  aria-label=".form-select-sm example">
       
        <option selected>Open this menu </option>

        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      
      <select class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
         </div>
         <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
        <label class="form-check-label" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
      
      
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check course</label>
        </div>
        <div class="input-group">
        <span class="input-group-text">With textarea</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
       </div>
       <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
        <input type="file" class="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload"/>
      </div>
    
      
     
      
      </form>
        
       

      )

   }





  