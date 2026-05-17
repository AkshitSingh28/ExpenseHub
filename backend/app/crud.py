from sqlalchemy.orm import Session
from app import models, schemas

# -------- USER --------
def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(name=user.name)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


# -------- EXPENSE --------
def create_expense(db: Session, expense: schemas.ExpenseCreate, user_id: int):
    db_expense = models.Expense(
    **expense.dict(),
    user_id=user_id
)
    db.add(db_expense)
    db.commit()
    db.refresh(db_expense)
    return db_expense


def get_expenses(db: Session, user_id: int):
    return db.query(models.Expense).filter(models.Expense.user_id == user_id).all()


def delete_expense(db: Session, expense_id: int):
    exp = db.query(models.Expense).filter(models.Expense.id == expense_id).first()
    if exp:
        db.delete(exp)
        db.commit()
    return exp