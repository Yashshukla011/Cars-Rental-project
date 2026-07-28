import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({

car:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Car",
    required:true
},

name:{
    type:String,
    required:true
},

email:{
    type:String,
    required:true
},

phone:{
    type:String,
    required:true
},

message:{
    type:String
},

status:{
    type:String,
    default:"Pending"
}

},
{
timestamps:true
});


export default mongoose.model("Inquiry", inquirySchema);