import google.generativeai as genai
import os
from dotenv import load_dotenv
from PIL import Image

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def analyze_image(image_path):
    model = genai.GenerativeModel("gemini-pro-vision")


    image = Image.open(image_path)

    prompt = """
    You are an AI civic assistant.
    Identify what civic issue is shown in this image.
    Respond in one short sentence.
    """

    response = model.generate_content([prompt, image])

    return response.text
