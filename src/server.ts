import express from "express";
const app = express();

import { categoriesRoutes } from "./routes/categories.routes";

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("Server is running!"));
