import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: String,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required.'],
      min: [6, 'password should be at least 6 characters.'],
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
