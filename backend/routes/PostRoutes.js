const express = require("express");
const router = express.Router();
const {
  fetchAllReviews,
  fetchOneReview,
  fetchAllReviewsOfUser,
} = require("../controller/FetchingControllers");
const { addReview } = require("../controller/AddControllers");
const { userAuth } = require("../middlewares/userauth");

router.get("/getAllPosts", fetchAllReviews);
router.get("/user/getAllPosts", userAuth, fetchAllReviewsOfUser);
router.get("/searchPosts", fetchAllReviews);
router.get("/getOnePosts/:id", fetchOneReview);
router.post("/addpost", userAuth, addReview);

module.exports = router;
