import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

// Get the directory name of the current module (ES modules equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from the backend directory
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = process.env.PORT;

// middleware that will parse json data in the req.body
app.use(express.json());

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  // Go up one level from backend to root, then into frontend/dist
  const rootDir = path.resolve(__dirname, "..");
  app.use(express.static(path.join(rootDir, "frontend", "dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(rootDir, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost: ${PORT}`);
});
