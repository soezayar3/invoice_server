import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import productRoutes from "./src/products/ProductRoutes.js";
import invoiceRoutes from "./src/invoices/InvoiceRoutes.js";

const app = express();
const PORT = process.env.PORT || 3030;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("APP IS RUNNING");
});

app.use("/products", productRoutes);
app.use("/invoices", invoiceRoutes);

mongoose
    .connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));
