import { config } from "dotenv";
import app from "./app.js";

config();

const server = app();
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`servidor rodando na porta http://localhost:${PORT}`);
});
