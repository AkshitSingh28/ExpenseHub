from pydantic import BaseModel
from datetime import datetime


from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str


class ExpenseCreate(BaseModel):
    title: str
    amount: float
    category: str
    type: str

class ExpenseResponse(BaseModel):
    id: int
    title: str
    amount: float

    class Config:
        orm_mode = True
