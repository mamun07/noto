import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import PostRouters from "./routes/posts.js";

// Mongoose DB use
const PORT = 5000;
const userName = "choco";
const userPass = "choco12345";
const closter = "Cluster0";
const dbName = "choco";
const MONGO_URL = `mongodb+srv://${userName}:${userPass}@${closter}.wbeyq.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
app.use(express());
app.listen(PORT, () => console.log(`Server Running at ${PORT}`));

app.use("/posts", PostRouters);

// mongoose connect
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => console.log("Database Connection error"));
db.once("open", () => console.log("Database Connect successfully !"));