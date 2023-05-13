const mongoose = require("mongoose");

/**
 * Defining courses schema
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, {collection: string}, {password: StringConstructor, mobileNumber: StringConstructor, name: StringConstructor, email: StringConstructor, age: StringConstructor}, HydratedDocument<FlatRecord<{password: StringConstructor, mobileNumber: StringConstructor, name: StringConstructor, email: StringConstructor, age: StringConstructor}>, unknown>>}
 */
const coursesSchema = new mongoose.Schema(
    {
        topic: String,
        subTopic: String,
        description: String,
        price: String,
        followingCount: String,
        lecturer: String,
        image: String
    },{
        collection: "courses",
    }
);
mongoose.model("courses",coursesSchema);