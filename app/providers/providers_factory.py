from app.providers.mock_providers import MockProvider

class ProviderFactory:

    @staticmethod
    def get_provider():
        return MockProvider()