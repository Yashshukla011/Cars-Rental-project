import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
{
    inquiry: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inquiry"
    },

    name: String,

    email: String,

    message: String,

    status: String,

    isRead: {
        type: Boolean,
        default: false
    }

},
{timestamps:true}
);

export default mongoose.model("Notification",notificationSchema);