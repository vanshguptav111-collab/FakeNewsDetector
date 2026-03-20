import { GoogleGenerativeAI } from "@google/generative-ai";

async function testKey() {
  try {
    const genAI = new GoogleGenerativeAI("AIzaSyAFguvLgtFJe06u2wPJqj9IgAydsw-qeM4");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Say hello");
    console.log("SUCCESS:", result.response.text());
  } catch (error) {
    console.error("GEMINI API ERROR:", error.message || error);
  }
}

testKey();
