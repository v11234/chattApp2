import express from "express";
import User from "../models/User.js";

export const getAllContacts = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filterUser = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.json({ filterUser });
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        console.log("Error in getAll Contact",error);
    }

}