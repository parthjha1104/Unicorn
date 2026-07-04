from app.core.base_llm import BaseLLMProvider

class LLMService(BaseLLMProvider) : 
    def generate(self, message: str) -> str:
        return f"NTD-Core Recived : {message}"