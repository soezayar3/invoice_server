import InvoiceModel from "./InvoiceModel.js";

export const getInvoices = async (req, res) => {
    try {
        const invoices = await InvoiceModel.find();
        res.status(200).json({ data: invoices });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};

export const createInvoice = async (req, res) => {
    const invoice = req.body;
    const newInvoice = new InvoiceModel({ ...invoice, date: new Date().toISOString() });

    try {
        await newInvoice.save();

        res.status(201).json({ message: "Successfully Created An Invoice" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getInvoiceGraph = async (req, res) => {
    res.send("This is working!!!");
};
