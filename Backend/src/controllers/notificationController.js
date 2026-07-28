import Notification from "../Models/Notification.model.js";

const getNotifications = async(req,res)=>{

try{

const notifications = await Notification.find().sort({
createdAt:-1
});

res.json({

success:true,

data:notifications

});

}catch(error){

res.status(500).json({

success:false,

message:error.message

});

}

};
export {getNotifications};