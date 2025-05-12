from pydantic import BaseModel, EmailStr

class PredictionResponse(BaseModel):
    result: str

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str
