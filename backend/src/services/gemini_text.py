import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def analyze_text(image_description):
    model = genai.GenerativeModel("gemini-pro")


    prompt = f"""
You are an AI civic governance assistant.

Based on the following image analysis:
"{image_description}"

Return a JSON with:
- issue_type
- department
- severity (Low / Medium / High)
- summary

Respond ONLY in valid JSON. No extra text.
"""

    response = model.generate_content(prompt)

    return response.text
