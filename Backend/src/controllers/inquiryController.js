import Inquiry from "../models/inquirymodel.js";
import Notification from "../Models/Notification.model.js";

// User submit inquiry
export const createInquiry = async (req, res) => {

  try {

    const inquiry = await Inquiry.create(req.body);


    res.status(201).json({
      success:true,
      message:"Inquiry sent successfully",
      data:inquiry
    });


  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};




// Admin get all inquiries
export const getAllInquiries = async (req,res)=>{

  try{


    const inquiries = await Inquiry.find()
    .populate("car")
    .sort({createdAt:-1});


    res.status(200).json({

      success:true,
      total:inquiries.length,
      data:inquiries

    });


  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};




// Update inquiry status

export const updateInquiryStatus = async (req, res) => {
  try {

    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    // Notification Save
    await Notification.create({
      inquiry: inquiry._id,
      name: inquiry.name,
      email: inquiry.email,
      status: inquiry.status,
      message: `Your inquiry status has been updated to ${inquiry.status}.`,
    });

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: inquiry,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};



// Delete inquiry

export const deleteInquiry = async(req,res)=>{

  try{


    await Inquiry.findByIdAndDelete(req.params.id);


    res.status(200).json({

      success:true,
      message:"Inquiry deleted"

    });


  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};