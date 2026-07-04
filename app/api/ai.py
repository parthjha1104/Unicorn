from fastapi import APIRouter
from pydantic import BaseModel
from app.providers.providers_factory import ProviderFactory
from app.service.llm import LLMService

print("LLMService imported from:", LLMService.__module__)
print("Generate method:", LLMService.generate)

router = APIRouter()
llm = LLMService()

class ChatReq(BaseModel):
    message : str 

@router.post("/chat")
async def chat(request : ChatReq):

    provider = ProviderFactory.get_provider()
    reply = llm.generate(request.message) # type: ignore

    return{
        "response" : reply 
    }