import InvoiceModel from "./InvoiceModel.js";

export const getInvoices = async (req, res) => {
    try {
        const _invoices = await InvoiceModel.find();
        let invoices = [];
        _invoices.map((invoice) => {
            invoices.push({
                _id: invoice._id,
                customerName: invoice.customerName,
                salePersonName: invoice.salePersonName,
                note: invoice.note,
                invoiceProducts: invoice.invoiceProducts,
                totalPrice: invoice.totalPrice,
                date: invoice.date.toLocaleDateString("en-GB"),
            });
        });
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
    const getDaysBetweenDates = function (startDate, endDate) {
        const _startDate = new Date(startDate);
        const _endDate = new Date(endDate);

        const dates = [];

        while (_startDate <= _endDate) {
            dates.push(_startDate.toLocaleDateString("en-US"));
            _startDate.setDate(_startDate.getDate() + 1);
        }
        return dates;
    };

    try {
        const invoices = await InvoiceModel.find().sort({ date: 1 });

        const d1 = invoices[0].date.toLocaleDateString("en-US");
        const d2 = new Date().toLocaleDateString("en-US");
        const dateRanges = getDaysBetweenDates(d1, d2);

        const dailyGraph = {};
        const monthlyGraph = {};
        const yearlyGraph = {};

        dateRanges.map((day) => {
            let _dailyTotal = 0;
            let _monthlyTotal = 0;
            let _yearlyTotal = 0;
            invoices.map((invoice) => {
                if (invoice.date.toLocaleDateString("en-US") == day) {
                    _dailyTotal += invoice.totalPrice;
                    dailyGraph[day] = _dailyTotal;
                }
                if (
                    new Date(day).getFullYear() == invoice.date.getFullYear() &&
                    new Date(day).toLocaleString("en-US", { month: "long" }) ==
                        invoice.date.toLocaleString("en-US", { month: "long" })
                ) {
                    _monthlyTotal += invoice.totalPrice;
                    monthlyGraph[invoice.date.toLocaleString("en-US", { month: "long" })] = _monthlyTotal;
                }
                if (new Date(day).getFullYear() == invoice.date.getFullYear()) {
                    _yearlyTotal += invoice.totalPrice;
                    yearlyGraph[invoice.date.getFullYear()] = _yearlyTotal;
                }
            });
        });

        res.status(200).json({ dailyGraph, monthlyGraph, yearlyGraph });
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
};
