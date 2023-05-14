const mongoose = require("mongoose");

/**
 * Defining student schema
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, {collection: string}, {password: StringConstructor, mobileNumber: StringConstructor, name: StringConstructor, email: StringConstructor, age: StringConstructor}, HydratedDocument<FlatRecord<{password: StringConstructor, mobileNumber: StringConstructor, name: StringConstructor, email: StringConstructor, age: StringConstructor}>, unknown>>}
 */
const userDetailsSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
        name: String,
        age: String,
        mobileNumber: String,
        role: String
    },{
        collection: "users",
    }
);
mongoose.model("users",userDetailsSchema);