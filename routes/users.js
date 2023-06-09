import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router()

//READ
router.get("/:id", verifyToken, getUser); //query string to grab a specific id for a user
router.get("/:id/friends", verifyToken, getUserFriends); //query to grab a specfic id of a users friends

//Update
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;