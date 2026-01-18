import express from "express";

const app=express();//created an express app

import userRouter from "./routes/user.route.js"

app.use("/api/v1/users")

export default app;