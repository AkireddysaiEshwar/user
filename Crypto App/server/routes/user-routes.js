import express from "express";
import {
  getAllUsers,
  postUsers,
  deleteUsers,
  updateUser,
} from "../controlers/user-controllers.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", postUsers);
router.delete("/users", deleteUsers);
router.patch("/users", updateUser);

export default router;
