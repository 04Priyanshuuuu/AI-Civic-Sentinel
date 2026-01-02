from google import genai
import os
from PIL import Image
from dotenv import load_dotenv

load_dotenv()

client = genai.Client()

def analyze_image(image_path: str) -> str:
    """
    Takes image path
    Returns plain English description of civic issue
    """
    image = Image.open(image_path)

    prompt = """
    You are an AI Civic Inspector.
    Look at this image and describe the civic issue clearly.
    Focus on problems like:
    - potholes
    - garbage
    - broken roads
    - water leakage
    - damaged infrastructure

    Do NOT return JSON.
    Just return a clear paragraph description.
    """

    response = client.models.generate_content(
        model="gemini-3-flash-preview",
        contents=[prompt, image]
    )

    return response.text.strip()
