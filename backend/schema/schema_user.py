from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class UserCreate(BaseModel):
    first_name: str
    last_name: str
    email: EmailStr

class RegisterUser(UserCreate):
    password:str

class LoginUser(BaseModel):
    email: EmailStr
    password: str