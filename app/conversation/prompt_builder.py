from app.conversation.syatem_prompt import SYSTEM_PROMPT

class PromptBuilder():
    def build(self, message: str):
        return f"""
{SYSTEM_PROMPT}

User :
{message}
"""