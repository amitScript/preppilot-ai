
import { GoogleGenAI } from "@google/genai";

export const analyzeResume = async () => {
  try {
    console.log("Gemini Key:", process.env.GEMINI_API_KEY);

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Reply with only: Gemini Working",
    });

    console.log("Gemini Response:");
    console.log(response.text);

   
    return {
  score: 84,

  strengths: [
    "Good DSA knowledge",
    "Strong problem-solving skills",
    "Relevant technical projects",
    "Clean resume structure"
  ],

  weaknesses: [
    "No internship experience mentioned",
    "Achievements section is missing",
    "Resume lacks quantified impact"
  ],

  suggestions: [
    "Add 2-3 strong projects with measurable outcomes",
    "Include GitHub and LinkedIn profile links",
    "Mention technical skills in a separate section",
    "Add certifications if available",
    "Keep the resume to one page with ATS-friendly formatting"
  ]
};

  } catch (error) {
    console.log("=========== GEMINI ERROR ===========");
    console.dir(error, { depth: null });
    console.log("====================================");

    throw error;
  }
};