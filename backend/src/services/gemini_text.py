from google import genai
import os
from dotenv import load_dotenv

load_dotenv()

client = genai.Client()

def analyze_text(description: str) -> str:
    """
    Takes vision output text
    Returns STRICT JSON only
    """

    prompt = f"""
    You are an AI system that converts civic issue descriptions
    into structured JSON.

    DESCRIPTION:
    {description}

    OUTPUT FORMAT (STRICT JSON ONLY):
    {{
      "issue_type": "string",
      "severity": "Low | Medium | High",
      "department": "string",
      "summary": "short summary"
    }}

    Rules:
    - Do NOT add explanation
    - Do NOT add markdown
    - Return valid JSON only
    """

    response = client.models.generate_content(
        model="gemini-3-flash-preview",
        contents=prompt
    )

    return response.text.strip()
