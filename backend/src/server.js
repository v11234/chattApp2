import express from "express";
import { ENV } from "./lib/env.js";
import {connectDB} from './lib/db.js'
import messageRoutes from "./routes/message.route.js";
import authRoute from './routes/auth.route.js'
import path from 'path'
const app=express();

const __dirname = path.resolve();

const PORT= ENV.PORT || 3000;
app.use("/api/auth",authRoute)
app.use("/api/messages",messageRoutes)

// make ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT,()=>{
console.log("Server is running on PORT",PORT);
connectDB();

})