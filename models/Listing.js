import mongoose from "mongoose";
import { LISTING_CATEGORY } from "../utils/constants.js";

const ListingSchema = new mongoose.Schema(
  {title:String,
    type: {
      type: String,
      enum: Object.values(LISTING_CATEGORY),
    },
    domain: {
      type: String,
      enum: Object.values(LISTING_CATEGORY),
    },
    description: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    city: String,
    county: String,
    thumbnail: String,
    gallery: [],
    positions: Number,
    duration:Number,
    earliestStart:Date,
    deadline:Date,
    requiredCertificate:String,


  },
  { timestamps: true }
);

export default mongoose.model("Listing", ListingSchema);
