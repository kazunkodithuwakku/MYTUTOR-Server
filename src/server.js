const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const router = require('./routes');
const mongo = require('./client/mongoClient');
const collection = require('./schemas/login');

app.use('/', router);
mongo.getMongoClient();
//shangavie
app.get("/login",(req , res)=>{
    res.render("login")
})
app.post("/login",async (req,res)=>{

    try{
        const check = await collection.findOne({email:req.body.email})
        if(check.password===req.body.password){
            res.render(home)
        }
        else{
            res.send("invalid email or password")
        }
    }
    catch{
        res.send("invalid email or password")
    }
})
const server = app.listen(port, () =>
    console.log(`My Tutor server is running on port : ${port}`)
);

module.exports = {
    app,
    server,
    router
};