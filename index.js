import express from 'express';
import router from './routes.js'; // Verifique o caminho correto do arquivo
import cors from "cors";
const app = express();
const Port = 6002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", router);
app.listen(Port, () => {
  console.log(`Servidor rodando em http://localhost:${Port}`);
});