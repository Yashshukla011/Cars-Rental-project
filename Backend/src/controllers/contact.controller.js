import Contact from "../Models/contact.model.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendContact = async (req, res) => {
  try {
    const { name, email, subject,mobile, message } = req.body;

    // Database me save
    const contact = await Contact.create({
      name,
      email,
      subject,
      mobile,
      message,
    });

    // Admin ko email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Admin email
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Message</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>
         <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Subject:</b> ${subject}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};