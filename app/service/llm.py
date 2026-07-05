from app.providers.providers_factory import ProviderFactory
from app.conversation.manager import ConversationManager

class LLMService: 
    def generate(self, message: str):
        conversation = ConversationManager()
        prompt = conversation.build_prompt(message)
        provider = ProviderFactory.get_provider()
        return provider.generate(prompt)