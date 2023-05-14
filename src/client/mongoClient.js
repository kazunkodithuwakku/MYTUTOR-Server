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
 * Adding user data to DB
 * @param userData - user data object
 * @returns {Promise<*>}
 */
const registerUser = async userData => {
  const users = mongoose.model('users');
  try{
      await users.create({
          email: userData.email,
          password: userData.password,
          name: userData.name,
          age: userData.age,
          mobileNumber: userData.contact,
          role: userData.role
      });
  }
  catch (error){
      return error.message
  }
};

const loginUsers = async loginData => {
    const users = mongoose.model('users');
    try{
        const user = await users.findOne({
            email: loginData.email
        });
        if(user.password===loginData.password){
            return {"status":true, "userType":user.role}
        }
        else
            return {"status":false}
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
    const courses = mongoose.model('courses');
    try{
        await courses.create({
            topic: courseData.topic,
            subTopic: courseData.subTopic,
            description: courseData.description,
            price: "$ "+courseData.price,
            followingCount: courseData.studentCount,
            lecturer: courseData.name,
            email: courseData.email,
            image: "https://cdn.thewirecutter.com/wp-content/media/2021/03/cheap-desktop-pc-2048px-3001-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
        });
    }
    catch (error){
        return error.message
    }
}

module.exports = {
    registerUser,
    getMongoClient,
    loginUsers,
    getCourses,
    addCourse
};