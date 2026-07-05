from app.providers.providers_factory import ProviderFactory

class LLMService: 
    def generate(self, message: str):
        provider = ProviderFactory.get_provider()
        return provider.generate(message)