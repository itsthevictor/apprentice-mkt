import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { LISTING_CATEGORY } from "../utils/constants.js";
import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import Listing from "../models/Listing.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("No doc")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("not auth")) {
          throw new UnauthorizedError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateListingInput = withValidationErrors([
  body("type")
    .isIn(Object.values(LISTING_CATEGORY))
    .withMessage("invalid listing category"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new Error("invalid MongoDB id");
    const task = await Listing.findById(value);
    if (!task) throw new NotFoundError(`No document with id: ${value}`);

    // check for author or admin role-NOT NECESSARY BUT KEEP CODE
    // const isAdmin = req.user.role === "admin";
    // const isOwner = task.createdBy.toString() === req.user.userId;
    // if (!isAdmin && !isOwner)
    //   throw new UnauthorizedError("not authorized to access this route");
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("firstName").notEmpty().withMessage("first name required"),
  body("lastName").notEmpty().withMessage("last name required"),
  body("email")
    .notEmpty()
    .withMessage("email required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password required"),
]);

export const validateUpdateUser = withValidationErrors([
  body("firstName").notEmpty().withMessage("first name required"),
  body("lastName").notEmpty().withMessage("last name required"),
  body("email")
    .notEmpty()
    .withMessage("email required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("email already exists");
      }
    }),
]);
