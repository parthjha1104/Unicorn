from app.conversation.prompt_builder import PromptBuilder
class ConversationManager :
    def __init__(self):
        self.builder = PromptBuilder()
    def build_prompt(self, message: str) -> str:
        return self.builder.build(message)
    
