import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import StoryRoute from "./routes/StoryRoute.js";
 
const app = express();
 
app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(StoryRoute);
 
app.listen(5000, ()=> console.log('Server Up and Running...'));