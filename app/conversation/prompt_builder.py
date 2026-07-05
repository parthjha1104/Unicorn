from app.conversation.syatem_prompt import SYSTEM_PROMPT

class PromptBuilder():
    def build(self, history):
        conversation = ""

        for msg in history:
            conversation +=(
                f"{msg['role'].capitalize()}"
                f"{msg['content']}\n"
            )
        return f"""
{SYSTEM_PROMPT}

Convesation History 
{conversation}

Assistant:
"""