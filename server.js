import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const sessions = new Map();

function getOrCreateChat(sessionId) {
  if (!sessions.has(sessionId)) {
    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: `
          You are a programming tutor.
          Only answer coding questions.
        `,
      },
    });

    sessions.set(sessionId, chat);
  }

  return sessions.get(sessionId);
}

app.post("/api/chat", async (req, res) => {
  const { message, sessionId } = req.body;

  if (!message || !sessionId) {
    return res.status(400).json({
      error: "message and sessionId are required",
    });
  }

  try {
    const chat = getOrCreateChat(sessionId);

    const response = await chat.sendMessage({
      message,
    });

    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

app.delete("/api/chat/:sessionId", (req, res) => {
  sessions.delete(req.params.sessionId);

  res.json({
    ok: true,
  });
});

// Load app.html when opening localhost:3000
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "app.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
