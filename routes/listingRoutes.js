import { Router } from "express";
import {
  createListing,
  getAllListings,
  getSingleListing,
  updateListing,
  deleteListing,
  getMyListings,
} from "../controllers/listingController.js";
import {
  validateListingInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import {
  authenticateAuthor,
  authenticateUser,
} from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();
router
  .route("/")
  .post(authenticateAuthor, validateListingInput, upload.array(), createListing)
  .get(getAllListings);

router
  .route("/:id")
  .get(validateIdParam, getSingleListing)
  .patch(authenticateAuthor, validateIdParam, updateListing)
  .delete(authenticateAuthor, validateIdParam, deleteListing);

export default router;
