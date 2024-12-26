import { NotFoundError } from "../errors/customErrors.js";
import Listing from "../models/Listing.js";
import User from "../models/User.js";
import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleware.js";

import { StatusCodes } from "http-status-codes";

export const createListing = async (req, res) => {
  req.body.createdBy = req.user.userId;
  console.log(req.body);

  const picture = formatImage(req.body.file);
  const response = await cloudinary.v2.uploader.upload(picture);
  req.user.gallery.push(response.secure_url);

  const user = await User.findById(req.user.userId);

  const listing = await Listing.create(req.body);
  res.status(StatusCodes.CREATED).json({ listing });
};

export const getAllListings = async (req, res) => {
  console.log(req.query);
  const { county, city, type } = req.query;
  const queryObject = {};
  if (county) {
    queryObject.county = county;
  }
  if (city) {
    queryObject.city = city;
  }
  if (type) {
    queryObject.type = type;
  }
  const listings = await Listing.find(queryObject);
  res.status(StatusCodes.OK).json({ listings });
};

export const getMyListings = async (req, res) => {
  console.log("get my Listings controller");
  console.log(req.user);
  const listings = await Listing.find({ createdBy: req.user.userId });
  if (!listings) {
    throw new NotFoundError("no Listings found");
  }
  res.status(StatusCodes.OK).json({ listings });
};

export const getSingleListing = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.status(StatusCodes.OK).json({ listing });
};

export const updateListing = async (req, res) => {
  const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ listing });
};

export const deleteListing = async (req, res) => {
  const removedListing = await Listing.findOneAndDelete({
    _id: req.params.id,
  });
  res
    .status(StatusCodes.OK)
    .json({ msg: `document deleted`, listing: removedListing });
};
