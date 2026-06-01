from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from collections import defaultdict

from app.database import SessionLocal
from app.models import Expense

router = APIRouter(
    prefix="/subscriptions",
    tags=["Subscription Tracker"]
)


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.get("/{user_id}")
def detect_subscriptions(
    user_id: int,
    db: Session = Depends(get_db)
):
    expenses = db.query(Expense).filter(
        Expense.owner_id == user_id,
        Expense.type == "expense"
    ).all()

    grouped = defaultdict(list)

    for item in expenses:
        title = item.title.lower().strip()
        grouped[title].append(float(item.amount))

    subscriptions = []

    for title, amounts in grouped.items():
        if len(amounts) >= 2:
            avg_amount = sum(amounts) / len(amounts)

            subscriptions.append({
                "name": title.title(),
                "average_amount": round(avg_amount, 2),
                "occurrences": len(amounts),
                "status": "Likely Subscription"
            })

    return subscriptions