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

app.get("/saludo", (req: Request, res: Response) => {
  res.json({ message: "Hola, bienvenido a la API" });
});

app.get("/api/v1", (req: Request, res: Response) => {
  res.json({ message: "API versión 1" });
});

app.get("/api/v1/funiona", (req: Request, res: Response) => {
  res.json({ message: "Vercel hace build automaticamente" });
});

app.listen(PORT, () => console.log(`Server running on puerto ${PORT}`));

export default app;
