import express from "express";
const home = express.Router();

home.get("/", async (req, res) => {
  return res.json("Welcome to Dwelltea");
});

export default home;
