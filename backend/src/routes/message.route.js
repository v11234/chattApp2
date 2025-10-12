import express from "express";
import { getAllContacts } from "../controllers/message.controller.js";

const router=express.Router();


router.get("/contacts",getAllContacts)

export default router;