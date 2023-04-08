const mongoose = require("mongoose");
const mongoDBURL = "mongodb+srv://kazun2kt:mongo1234@mytutor.hkj5swr.mongodb.net/?retryWrites=true&w=majority";
require('../schemas/student');
const {raw} = require("express");
const  mongoClient =  mongoose.connect(mongoDBURL,{
        useNewUrlParser:true
    }).then(()=>{console.log("Successfully connected to mongo")})
        .catch(e=>console.log(e));

const getMongoClient = async () => {
    return mongoClient;
};

const registerStudent = async studentData => {
  const students = mongoose.model('students');
  try{
      await students.create({
          email: studentData.email,
          password: studentData.password,
          name: studentData.name,
          age: studentData.age,
          mobileNumber: studentData.mobile,
      });
  }
  catch (error){
      return error.message
  }
};

module.exports = {
    registerStudent,
    getMongoClient
};