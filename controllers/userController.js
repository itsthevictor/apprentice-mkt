import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import Listing from "../models/Listing.js";
import { verifyJWT } from "../utils/tokenUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";

export const getCurrentUser = async (req, res) => {
  // console.log(req.cookies);
  if (!req.cookies.token) {
    throw new UnauthenticatedError("user unauthenticated");
  }
  const { userId } = verifyJWT(req.cookies.token);
  const userWP = await User.findOne({ _id: userId });
  const user = userWP.toJSON();
  res.status(StatusCodes.OK).json({ user });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const listings = await Listing.countDocuments();
  res.status(StatusCodes.OK).json({ users, tasks });
};

export const updateUser = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ updatedUser });
};
