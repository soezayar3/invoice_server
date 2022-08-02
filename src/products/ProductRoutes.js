import express from "express";
import { getProducts } from "./ProductController.js";

const router = express.Router();

router.get("/", getProducts);

export default router;
