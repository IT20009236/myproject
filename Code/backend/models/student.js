const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create a model for student
const studentSchema = new Schema({
    username: { type: String, required: true },
    hashedPWD: { type: String, required: true}
})

const Student = mongoose.model("Student_login", studentSchema);
module.exports = Student; //export the module