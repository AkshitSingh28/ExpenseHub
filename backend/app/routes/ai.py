from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import SessionLocal
from app.models import Expense

from app.ai.predictor import (
    predict_future_expenses
)

router = APIRouter()

# DATABASE

def get_db():

    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()

# AI PREDICTION API

@router.get("/predict/{user_id}")

def predict_expense(
    user_id: int,
    db: Session = Depends(get_db)
):

    expenses = db.query(Expense).filter(
        Expense.user_id == user_id
    ).all()

    result = predict_future_expenses(
        expenses
    )

    return result