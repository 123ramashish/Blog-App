import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js";
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import Mood from "../models/mood.schema.js";
import mongoose from "mongoose";
dotenv.config();

export const test = async (req, res) => {
  res.status(200).send("Api is working!");
};

// Generate a random 6-digit OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
    }
});

// Send OTP to email
export const sendOtpToEmail = async (req, res) => {
    try {
        const { email } = req.body; // Corrected to destructure directly from req.body
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User  not found, Sign-Up!' });
        }
        
        const otp = generateOtp();
        user.otp = otp;
        await user.save();
        
        const mailOptions = {
          from: `MoodVibe Support <${process.env.EMAIL_USER}>`,
          to: email,
          subject: 'MoodVibe - Password Reset OTP',
          text: `Your MoodVibe password reset OTP is: ${otp}\n\nThis OTP is valid for 10 minutes.`,
          html: `
              <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                  <div style="text-align: center; padding: 20px; background-color: #f8f9fa; border-radius: 8px 8px 0 0;">
                      <h2 style="color: #4f46e5; margin: 0; font-size: 24px;">MoodVibe Password Reset</h2>
                  </div>
                  
                  <div style="padding: 30px 20px;">
                      <p style="font-size: 16px; color: #374151; margin-bottom: 25px;">
                          Hey there, MoodViber!<br>
                          We received a request to reset your password. Here's your One-Time Password:
                      </p>
                      
                      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px; text-align: center; margin: 25px 0;">
                          <h3 style="margin: 0; color: #1f2937; font-size: 32px; letter-spacing: 2px; font-weight: bold;">
                              ${otp}
                          </h3>
                      </div>
                      
                      <p style="font-size: 14px; color: #6b7280; margin-bottom: 20px;">
                          This OTP will expire in 10 minutes.<br>
                          If you didn't request this password reset, please ignore this email.
                      </p>
                  </div>
                  
                  <div style="padding: 20px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; text-align: center;">
                      <p style="font-size: 12px; color: #6b7280; margin: 0;">
                          Need help? Contact our support team at 
                          <a href="mailto:support@moodvibe.com" style="color: #4f46e5; text-decoration: none;">support@moodvibe.com</a>
                      </p>
                      <p style="font-size: 12px; color: #6b7280; margin: 10px 0 0 0;">
                          © ${new Date().getFullYear()} MoodVibe. All rights reserved.
                      </p>
                  </div>
              </div>
          `
      };
        
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'OTP sent successfully' });
        
    } catch (error) {
        console.error(error.message); // Log the error for debugging
        return res.status(500).json({ error: error.message });
    }
};
// Verify OTP
export const verifyOtp = async (req, res) => {

  try {
      const { email, otp } = await req.body;
      const user = await User.findOne({ email });
      if (!user || user.otp !== parseInt(otp)) {
          return res.status(400).json({ message: 'Invalid OTP' });
      }
      
      user.otp = null;
      await user.save();
      
      return res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
      return res.status(500).json({ error: error.message });
  }
};

// Update Password
export const updatePassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();
    
    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// contact function

export const contact = async (req, res, next) => {
    try {
      const { name, email, subject, message } = req.body;
  
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const mailOptions = {
        from: `MoodVibe Support <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `MoodVibe Contact Form: ${subject}`,
        text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="text-align: center; padding: 20px; background-color: #f8f9fa; border-radius: 8px 8px 0 0;">
              <h2 style="color: #4f46e5; margin: 0; font-size: 24px;">New Contact Form Submission</h2>
            </div>
            
            <div style="padding: 30px 20px;">
              <div style="margin-bottom: 25px;">
                <p style="font-size: 16px; color: #374151; margin: 0 0 10px 0;">
                  <strong>Name:</strong> ${name}
                </p>
                <p style="font-size: 16px; color: #374151; margin: 0 0 10px 0;">
                  <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
                </p>
                <p style="font-size: 16px; color: #374151; margin: 0 0 10px 0;">
                  <strong>Subject:</strong> ${subject}
                </p>
              </div>
              
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 6px;">
                <h3 style="margin: 0 0 15px 0; color: #1f2937; font-size: 20px;">Message:</h3>
                <p style="font-size: 16px; color: #374151; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="padding: 20px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="font-size: 12px; color: #6b7280; margin: 0;">
                This message was sent via the MoodVibe contact form
              </p>
              <p style="font-size: 12px; color: #6b7280; margin: 10px 0 0 0;">
                © ${new Date().getFullYear()} MoodVibe. All rights reserved.
              </p>
            </div>
          </div>
        `
      };
  
      // Send email
      await transporter.sendMail(mailOptions);
      
      return res.status(200).json({ message: 'Your message has been sent successfully' });
      
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request. Please try again later." 
      });
    }
  };
// signout function
export const signout = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    return res.status(200).json({ message: "Signed out successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred during signout" });
  }
};

export const saveMoodData = async (req, res, next) => {
  try {
    // Extract userId and answers from the request body
    const { userId, mood } = req.body;
    // Create a new Mood instance
    const moodData = new Mood({
      userId: userId,
      result: mood, 
    });

    // Save the mood data to the database
    const savedMood = await moodData.save();

    console.log("Mood data saved successfully:", savedMood);
    return res.status(200).json({ message: "Save mood data successfully", data: savedMood });
  } catch (error) {
    console.error("Error saving mood data:", error);
    return res.status(500).json({ message: "An error occurred while saving mood data" });
  }
};


export const getMoodData = async (req, res, next) => {
    try {
        const userId = req.query.userId; // Extract userId from query parameters
        console.log("User  ID:", userId);

        // Ensure userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        // Fetch mood data for the specific user
        const result = await Mood.find({ userId: new mongoose.Types.ObjectId(userId) }); // Correctly filter by userId
        console.log(result);
        return res.status(200).json({ message: "Mood data fetched successfully", data: result });
    } catch (error) {
        console.error("Error fetching mood data:", error);
        return res.status(500).json({ message: "An error occurred while fetching mood data" });
    }
};


