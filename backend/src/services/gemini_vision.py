import google.generativeai as genai
import os
from PIL import Image
from dotenv import load_dotenv

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-3-flash-preview")

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

    response = model.generate_content([prompt, image])

    return response.text.strip()
