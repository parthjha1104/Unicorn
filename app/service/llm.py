from app.providers.providers_factory import ProviderFactory
from app.conversation.manager import ConversationManager
from app.memory.history import memory

class LLMService: 
    def generate(self, message: str):
        conversation = ConversationManager()
        prompt = conversation.build_prompt(message)
        provider = ProviderFactory.get_provider()
        reply = provider.generate(prompt)
        memory.add("assistant", reply)
        return reply