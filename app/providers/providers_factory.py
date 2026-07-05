from app.core.setting import settings
from app.providers.mock_providers import MockProvider
from app.providers.openai_compatible_provider import OpenAICompatibleProvider
class ProviderFactory:

    @staticmethod
    def get_provider():

        print("Provider selected:", settings.AI_Provider)

        if settings.AI_Provider == "mock":
            return MockProvider()

        return OpenAICompatibleProvider()
