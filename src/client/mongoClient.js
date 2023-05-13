const mongoose = require("mongoose");
const mongoDBURL = "mongodb+srv://kazun2kt:mongo1234@mytutor.hkj5swr.mongodb.net/?retryWrites=true&w=majority";
require('../schemas/student');
require('../schemas/courses');
const {raw} = require("express");
const  mongoClient =  mongoose.connect(mongoDBURL,{
        dbName: 'MYTUTOR',
        useNewUrlParser:true
    }).then(()=>{console.log("Successfully connected to mongo")})
        .catch(e=>console.log(e));

const getMongoClient = async () => {
    return mongoClient;
};
/**
 *
 * Adding student data to DB
 * @param studentData - student data object
 * @returns {Promise<*>}
 */
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

const loginStudents = async loginData => {
    const students = mongoose.model('students');
    try{
        const user = await students.findOne({
            email: loginData.email
        });
        if(user.password===loginData.password)
            return true
        else
            return false
    }
    catch (error){
        return false
    }
};

const getCourses = async () => {
    const coursesModel = mongoose.model('courses');
    try{
        const allCourses = await coursesModel.find({});
        return allCourses;
    }
    catch (error){
        return false
    }
};

module.exports = {
    registerStudent,
    getMongoClient,
    loginStudents,
    getCourses
};