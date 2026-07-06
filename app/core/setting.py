import os

from dotenv import load_dotenv

load_dotenv()

class Settings: 
    AI_Provider = os.getenv("AI_Provider", "mock")
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    OPENAI_BASE_URL = os.getenv(
        "OPENAI_BASE_URL"
        "https://api.openai.com/v1"
    )
    OPENAI_MODEL = os.getenv(
        "OPENAI_MODEL",
        "gpt-4.1-mini",
    )
settings = Settings()
