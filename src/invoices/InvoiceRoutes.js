import express from "express";
import { getInvoices, createInvoice, getInvoiceGraph } from "./InvoiceController.js";

const router = express.Router();

router.get("/", getInvoices);
router.post("/", createInvoice);
router.get("/graph", getInvoiceGraph);

export default router;
