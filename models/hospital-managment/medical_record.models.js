import mongoose from 'mongoose';

const medicalReacordSchema = new mongoose.Schema({}, { timestamps: true });

export const medicalReacord = mongoose.model(
  'medicalRecord',
  medicalReacordSchema
);
