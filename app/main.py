from fastapi import FastAPI
from app.api.ai import router as airtr
app = FastAPI(
    title = "Project Unicorn - NTD-VA",
    version = "0.1"
)
app.include_router(airtr)

@app.get("/")
async def root():
    return{
        "project" : "Project Unicorn",
        "Service" : "NTD-VA",
        "Status" : "Online"
    }