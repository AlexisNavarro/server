import express from "express";
import {getFeedPosts, getUserPosts, likePost} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//read
router.get("/", verifyToken, getFeedPosts); //grab the user feed when on the home page
router.get("/:userId/posts", verifyToken, getUserPosts); //grab the users specific posts 

//update
router.patch("/:id/like", verifyToken, likePost);

export default router;
