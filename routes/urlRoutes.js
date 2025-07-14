import express from "express";
const router =express.Router();
import {Log} from "../middleware/log.js"
import Url from "../models/Url.js"

import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 6);

// POST /shorturls
router.post("/shorturls",async(req,res)=>{
    const {url,validity=30,shortcode} =req.body;
    if(!url || typeof url !=="string"){
        await Log("backend","error","handler","Invalid URL format")
        return res.status(400).json({error:"Valaid URL is required"});
    }

    let code=shortcode || nanoid();
    const existing =await Url.findOne({shortCode:code});

    if(existing){
        await Log("backend","warn","handler",`Shortcode already taken: ${code}`)
        code = nanoid();
    }
    const expiry=new Date(Date.now() + validity * 60 *1000);

    const newUrl=new Url({
        originalUrl:url,
        shortCode:code,
        expiry
    })

    try {
        await newUrl.save();
        await Log("backend", "info", "controller", `Short URL created with code: ${code}`);
        res.status(201).json({
          shortLink: `http://localhost:3000/${code}`,
          expiry: expiry.toISOString(),
        });
      } catch (err) {
        await Log("backend", "fatal", "db", "Failed to save URL to database");
        res.status(500).json({ error: "Server error" });
      }
})

router.get("/shorturls/:shortcode",async (req,res)=>{
  const {shortcode} = req.params;

  try{
    const urlData= await Url.findOne({shortCode:shortcode});

    if(!urlData){
      await Log("backend", "error", "handler", `Shortcode not found: ${shortcode}`);
      return res.status(404).json({ error: "Shortcode not found" });
    }
    const {originalUrl, createdAt, expiry, clickCount, clicks}= urlData;

    await Log("backend", "info", "controller", `Stats fetched for: ${shortcode}`);

    return res.json({
      originalUrl,
      createdAt,
      expiry,
      clickCount,
      clicks,
    });
  } catch (err) {
    await Log("backend", "fatal", "db", `Error fetching stats: ${err.message}`);
    res.status(500).json({ error: "Server error" });
  }

})


export default router;