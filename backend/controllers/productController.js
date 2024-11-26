const Product = require("../models/productModel");

exports.getProducts = (req, res) => {
    Product.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

exports.createProduct = (req, res) => {
    Product.create(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({ message: "Product created successfully", id: result.insertId });
    });
};

exports.updateProduct = (req, res) => {
    Product.update(req.params.id, req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Product updated successfully" });
    });
};

exports.deleteProduct = (req, res) => {
    Product.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: "Product deleted successfully" });
    });
};