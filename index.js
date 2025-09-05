import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/moodvibe')
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
  });

const app = express();

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
    credentials: true,
  })
);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// Serve static files if needed
// app.use(express.static(path.join(__dirname, "/client/dist")));

// Handle all other routes (for frontend routing if needed)
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "/client/dist/index.html"))
// );

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, statusCode, message });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});