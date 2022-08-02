import mongoose from "mongoose";

const invoiceSchema = mongoose.Schema({
    customerName: String,
    salePersonName: String,
    note: String,
    invoiceProducts: [
        {
            name: String,
            picture: String,
            price: Number,
            quantity: Number,
            total: Number,
        },
    ],
    totalPrice: Number,
    date: {
        type: Date,
        default: new Date(),
    },
});

const InvoiceModel = mongoose.model("InvoiceModel", invoiceSchema);

export default InvoiceModel;
