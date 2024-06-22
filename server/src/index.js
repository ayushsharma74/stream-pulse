import express from "express";
import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})
const PORT = 8080 ?? process.env.PORT;

app.get('/ping', (req,res) => {
    res.send("pong");
})


app.listen(PORT, () => {
    console.log("Server is listening at port : ", PORT);
})



