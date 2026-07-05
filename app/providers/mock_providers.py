from app.providers.base import BaseProvider

class MockProvider(BaseProvider):
    def generate(self, message):
        return (
            "Mock Provider\n\n"
            f"You said:{message}\n\n"
            "No LLM connected yet."
        )