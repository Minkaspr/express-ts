"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.json({
        message: "Bienvenido to the API",
        status: "running",
        timestamp: new Date().toISOString(),
    });
});
app.listen(PORT, () => console.log(`Server running on puerto ${PORT}`));
exports.default = app;
