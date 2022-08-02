import mongoose from "mongoose";
import ProductModel from "./ProductModel.js";
import * as dotenv from "dotenv";
dotenv.config();

const PRODUCTS = [
    {
        name: "Rose",
        picture:
            "https://images.unsplash.com/photo-1548460464-2a68877c7a5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        price: 1000,
        stock: 30,
    },
    {
        name: "Lily",
        picture:
            "https://images.unsplash.com/photo-1580595999172-787970a962d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlseXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 1500,
        stock: 30,
    },
    {
        name: "Tulip",
        picture:
            "https://images.unsplash.com/photo-1518701005037-d53b1f67bb1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHVsaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 2000,
        stock: 30,
    },
    {
        name: "Orchid",
        picture:
            "https://images.unsplash.com/photo-1611820135074-e2d0e3e92322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG9yY2hpZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 2500,
        stock: 30,
    },
    {
        name: "Carnation",
        picture:
            "https://images.unsplash.com/photo-1592220957678-3446df33041b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcm5hdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 3000,
        stock: 30,
    },
    {
        name: "Freesia",
        picture:
            "https://images.unsplash.com/photo-1559765197-45741695a7fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXNpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 3500,
        stock: 30,
    },
    {
        name: "Hyacinth",
        picture:
            "https://images.unsplash.com/photo-1586522528166-dc0e55a9c046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHlhY2ludGh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 4000,
        stock: 30,
    },
    {
        name: "Anemone",
        picture:
            "https://images.unsplash.com/photo-1589574493947-305a8247d689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuZW1vbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 4500,
        stock: 30,
    },
    {
        name: "Daffodil",
        picture:
            "https://images.unsplash.com/photo-1485431142439-206ba3a9383e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGFmZm9kaWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 5000,
        stock: 30,
    },
    {
        name: "Poppy",
        picture:
            "https://images.unsplash.com/photo-1606952460453-3b7edc2f67a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9wcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 5500,
        stock: 30,
    },
    {
        name: "Sunflower",
        picture:
            "https://images.unsplash.com/photo-1598364170688-8019081b09cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bmZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        price: 6000,
        stock: 30,
    },
    {
        name: "Marigold",
        picture:
            "https://images.unsplash.com/photo-1606432144664-594a97fea6e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaWdvbGR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: 6500,
        stock: 30,
    },
];

mongoose
    .connect(process.env.CONNECTION_URL)
    .then(() => {
        console.log("Mongo Connection Opened");
    })
    .catch((error) => console.log(error));

const seed = async () => {
    await ProductModel.insertMany(PRODUCTS);
};

seed().then(() => {
    mongoose.connection.close();
    console.log("Successfully Seed Data");
    console.log("Mongo Connection Closed");
});
