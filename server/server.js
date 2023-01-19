import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes.js";
import db from './config/db.js'


dotenv.config();

const app = express();

db()


// Line 14 connects posts.js and "/". "/posts" shows posts.js  

app.use("/posts", postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



const port = process.env.PORT || 4003
app.listen(port, () => console.log('Server is up and running at port', port))

// mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
