
import React from "react";
import "./App.css";
import{Route,Routes} from "react-router-dom";
import {Blogs} from "./components/Blogs";

//import { Contact } from "./components/Contact";
//import {Contact} from "./components/Contact";


//import{Header} from "./components/Header"

function App(){

         return(
          
            <Routes>
            <Route path="/" element={<Blogs/>}/>
             <Route/>

            </Routes>
          

      


          
           
           
    


          








         );



}


export default App;
