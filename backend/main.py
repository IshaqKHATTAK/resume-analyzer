from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import env_cofiguration
from routers import user
app = FastAPI()
#envs = env_cofiguration.get_envs()
origins = [
    # For production
    # envs.FRONTEND

    # For development allow all origins
    "*"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}

app.include_router(user.userrouter)