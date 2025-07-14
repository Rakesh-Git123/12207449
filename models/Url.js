import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true },
    shortCode: { type: String, required: true, unique: true },
    expiry: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
  clickCount: { type: Number, default: 0 },
  clicks: [
    {
      timestamp: { type: Date, default: Date.now },
      referrer: String,
      location: String,
    },
  ],
})

export default mongoose.model("Url",urlSchema);