import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Bienvenido to the API",
    status: "running",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => console.log(`Server running on puerto ${PORT}`));

export default app;
