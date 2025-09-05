import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the schema for mood data
const moodSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Correctly set the type to ObjectId
    ref: "User ", // Reference the User model
    required: true, 
  },
  result: {
    type: String, 
    required: true, // Ensure result are required
  },
}, {
  timestamps: true // Automatically manage createdAt and updatedAt fields
});

// Create the model
const Mood = mongoose.model('Mood', moodSchema); // Removed extra space in model name
export default Mood;
