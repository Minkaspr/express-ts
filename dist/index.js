"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const AUTHOR = process.env.AUTHOR || "Desconocido";
app.get("/", (req, res) => {
    res.json({
        message: "Bienvenido a la API, elaborado por " + AUTHOR,
        status: "running",
        timestamp: new Date().toISOString(),
    });
});
app.get("/saludo", (req, res) => {
    res.json({ message: "Hola, bienvenido a la API" });
});
app.get("/api/v1", (req, res) => {
    res.json({ message: "API versión 1" });
});
app.get("/api/v1/funiona", (req, res) => {
    res.json({ message: "Vercel hace build automaticamente" });
});
app.listen(PORT, () => console.log(`Server running on puerto ${PORT}`));
exports.default = app;
