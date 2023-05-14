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
          role: studentData.role
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
        if(user.password===loginData.password){
            return true
        }
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

const addCourse = async courseData => {
    const students = mongoose.model('courses');
    try{
        await students.create({
            topic: courseData.topic,
            subTopic: courseData.subTopic,
            description: courseData.description,
            price: "$ "+courseData.price,
            followingCount: courseData.studentCount,
            lecturer: courseData.name,
            image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        });
    }
    catch (error){
        return error.message
    }
}

module.exports = {
    registerStudent,
    getMongoClient,
    loginStudents,
    getCourses,
    addCourse
};