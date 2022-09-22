//import required packages and models
const router = require("express").Router();
const bcrypt = require("bcrypt");
const Student = require("../models/student.js");
//const Student = require("../models/student.js");
let student = require("../models/student.js");

//ADD STUDENT
//http//localhost:8070/student/addStudent
//getting student data from frontend as a request
router.route("/addStudent").post(async(req, res) =>{
    const username = req.body.username;
    const password = req.body.password

    const hashedPWD = await bcrypt.hash (password, 10);
    
    //create the student object and initialize above variables
    const newStudent = new student({
        username, hashedPWD
    })
    
    //pass student object to the database
    newStudent.save().then(() => {
        res.json("Student added successfully")
    }).catch((err) => {
        console.log("Student adding unsuccessful !", err);
    })
  
})

/*.........................................................................................*/

//UPDATE PASSWORD
//http//localhost:8070/student/updatePassword/id
//get specific student id from frontend 
router.route("/updatePassword/:id").put (async (req, res) => {
    let stdID = req.params.id;

    const newPassword = req.body.password; //catch password from request 

    const updatedPWD = {newPassword}; //create object including new password

    //find student by id and update password
    const updatePassword = await student.findByIdAndUpdate(stdID, updatedPWD).then((updatePassword) => {
        res.status(200).send({status: "Password successfully updated !", student: updatePassword});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Password updation unsuccessful !", error: err.message});
    })

})

/*.........................................................................................*/

//DELETE STUDENT
//http//localhost:8070/student/deleteStudent/id
//get specific student id from frontend 
router.route("/deleteStudent/:id").delete (async (req, res) => {
    res.send('get request is sending  on port  ${PORT}');
    //let stdID = req.params.id;

    //find student by id and login
   // const deleteStudent = await student.findByIdAndDelete(stdID).then(() => {
       // res.status(200).send({status: "Student Deleted !"});
   // }).catch((err) => {
        //console.log(err.message);
        //req.status(500).send({status: "Deletion Unsuccessful !"});
   // })
})

/*.........................................................................................*/

//LOGIN STUDENT
//http//localhost:8070/student/studentLogin
//getting username and password from frontend
router.route("/studentLogin").post (async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;


try{
    //find student from databse
    const LogStudent = student.find(LogStudent => LogStudent.username === username);
    if (!LogStudent) throw new Error ("Student does not exist !");

    //Compare if the password is match
    const valid = await compare (password, LogStudent.password);
    if(!valid) throw new Error ("Password is not correct !");

    //const accessToken
    //const refreshToken




}catch(err){
    console.log(err);
}



})




/*---------GET STUDENT DEATAILS-----------*/

router.route("/").get((req,res)=>{
         
    Student.find().then((students)=>{
            
          res.json(students)

    }).catch((err)=>{

          console.log(err)
    })







})




 
 




 

module.exports = router; //export the module