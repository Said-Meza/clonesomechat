import express from "express";
import { pool } from "./config/db.js"
import dotenv from "dotenv";
import cors from "cors";
import { apiFetch } from "./config/Apifetch.js";
//midleware
dotenv.config();

const app = express()

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());


//routes
app.get("/history", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM messages ORDER BY id ASC"
    );

    return res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error al obtener el historial."
    });
  }
});

app.post("/api/chat", async (req, res) => {
    try {
        const { msg } = req.body;

        // Guardar mensaje del usuario
        await pool.query(
            "INSERT INTO messages(role, message) VALUES($1, $2)",
            ["user", msg]
        );

        // Consultar Ollama
        const responseOllama = await apiFetch(msg);

        // Guardar respuesta de la IA
        await pool.query(
            "INSERT INTO messages(role, message) VALUES($1, $2)",
            ["ia", responseOllama.response]
        );

        // Responder al frontend
        return res.status(201).json({
            response: responseOllama.response
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Error al guardar el mensaje."
        });
    }
});


app.listen(PORT, () => {
  console.log(`app listening on port http://localhost:${PORT}`)
})