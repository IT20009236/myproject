
import React from "react";

     function addStudents(){


 return(
           
  <form>

  <div class="mb-3">
     <label for="name">Studentname</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp"placeholder="Enter your name"/>
    
  </div>


  <div class="mb-3">
    <label for="age">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
  <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Open this select menu</option>
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


  <button type="submit" class="btn btn-primary">Submit assingment</button>
</form>


)


}

export default addStudents;