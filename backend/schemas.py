from pydantic import BaseModel

class UserCreate(BaseModel):
    name: str
    email: str
    password: str


class AdminLogin(BaseModel):
    email: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str


class ForgotPassword(BaseModel):
    email: str
class QuestionRequest(BaseModel):
    skills: list[str]    
class AnswerRequest(BaseModel):
    question: str
    answer: str    
class AIAnswerRequest(BaseModel):
    question: str
    answer: str
class HRAnswerRequest(BaseModel):
    question: str
    answer: str
class CodeAnswerRequest(BaseModel):
    question: str
    code: str
class CodeAnswerRequest(BaseModel):
    question: str
    code: str    