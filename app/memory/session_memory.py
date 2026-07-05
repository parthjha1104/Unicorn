class SessionMemomry :
    def __init__(self):
        self.message = []
    def add(self, role : str, content: str) :
        self.message.append(
            {
                "role": role,
                "content": content

            }
        )
    def get(self):
        return self.message