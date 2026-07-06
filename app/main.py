from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.ai import router as airtr

app = FastAPI(
    title="Project Unicorn - NTD-VA",
    version="0.1"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "project": "Project Unicorn",
        "Service": "NTD-VA",
        "Status": "Online"
    }

app.include_router(airtr)