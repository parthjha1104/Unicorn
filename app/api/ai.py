from fastapi import APIRouter
from pydantic import BaseModel
from app.service.llm import LLMService

print("LLMService imported from:", LLMService.__module__)
print("Generate method:", LLMService.generate)

router = APIRouter()
llm = LLMService()

class ChatReq(BaseModel):
    message : str 

@router.post("/chat")
async def chat(request : ChatReq):

    reply = llm.generate(request.message)

    return{
        "response" : reply 
    }