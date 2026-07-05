from app.conversation.prompt_builder import PromptBuilder
from app.memory.history import memory
class ConversationManager :
    def __init__(self):
        self.builder = PromptBuilder()
    def build_prompt(self, message: str):
        memory.add("user", message)

        prompt = self.builder.build(
            memory.get()
        )

        return prompt
    
    
