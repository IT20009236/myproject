import React from "react";
import '../css/dashboard.css';

function dashboard(){
    return(
        <div className="newadminsDashbord">
            <h3>Administrator's Dashboard</h3> <hr/> <br/>
            <div>
               <button type="button" className="btn btn-success">View All Students</button> <br/> <br/>
               <button type="button" className="btn btn-success">Add New Student</button> <br/> <br/>
               <button type="button" className="btn btn-success">Update Student Password</button>
             </div>
        </div>
        

    )
}

export default dashboard;