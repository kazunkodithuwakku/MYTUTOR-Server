const mongoose = require("mongoose");

const studentDetailsSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
        name: String,
        age: String,
        mobileNumber: String,
    },{
        collection: "students",
    }
);
mongoose.model("students",studentDetailsSchema);