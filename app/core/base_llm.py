from abc import ABC, abstractmethod
class  BaseLLMProvider(ABC):

    @abstractmethod
    def generate(self , message: str) -> str :
        pass