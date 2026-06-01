from fastapi import FastAPI
from app.routes import user, expense
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine
from app.models import Base
from app.routes import ai
from app.routes import auth
from app.routes import subscriptions

app = FastAPI()

app.include_router(user.router)
app.include_router(expense.router)
app.include_router(ai.router)
app.include_router(auth.router)
app.include_router(subscriptions.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(auth.router)

Base.metadata.create_all(bind=engine)