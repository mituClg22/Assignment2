const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// Admin-only Inventory API
router.get(
    "/inventory",
    authMiddleware,
    adminMiddleware,
    async (req, res) => {
        try {
            // Replace this with your actual Inventory model
            const inventory = [
                {
                    product: "Laptop",
                    quantity: 25,
                    status: "Available"
                },
                {
                    product: "Keyboard",
                    quantity: 50,
                    status: "Available"
                },
                {
                    product: "Mouse",
                    quantity: 10,
                    status: "Low Stock"
                }
            ];

            res.status(200).json({
                success: true,
                message: "Inventory fetched successfully",
                data: inventory
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch inventory",
                error: error.message
            });
        }
    }
);

module.exports = router;