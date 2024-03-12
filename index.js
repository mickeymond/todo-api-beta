import express from "express";
import todosRoutes from "./routes/todos.routes.js";

// Create express app
const app = express();

// Use routes
app.use(todosRoutes);

// Listen for incoming requests
app.listen(4000, () => {
    console.log("Express app is running!")
});