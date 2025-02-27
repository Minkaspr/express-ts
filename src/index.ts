import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;
const AUTHOR = process.env.AUTHOR || "Desconocido";

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Bienvenido a la API, elaborado por " + AUTHOR,
    status: "running",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => console.log(`Server running on puerto ${PORT}`));

export default app;
