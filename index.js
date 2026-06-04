import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";


const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  config: {
    systemInstruction: `
      You are a programming tutor.
      Only answer coding questions.
    `
  }
});

while (true) {
  const question = readlineSync.question("You: ");

  if (question.toLowerCase() === "exit") {
    break;
  }

  try {
    const response = await chat.sendMessage({
      message: question
    });

    console.log("\nAI:", response.text, "\n");
  } catch (error) {
    console.log("Error:", error.message);
  }
}