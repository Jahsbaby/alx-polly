// app.js (root)
import express from "express";
import pollsRoutes from "./src/routes/pollsRoutes.js";  // ✅ correct path

const app = express();
app.use(express.json());

// mount routes
app.use("/polls", pollsRoutes);

export default app;
