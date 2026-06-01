import numpy as np
from sklearn.linear_model import LinearRegression

def predict_future_expenses(expenses):

    if len(expenses) < 2:

        return {
            "prediction": 0,
            "message": "Not enough data"
        }

    # CREATE DATASET

    amounts = [
        float(exp.amount)
        for exp in expenses
        if exp.type == "expense"
    ]

    if len(amounts) < 2:

        return {
            "prediction": 0,
            "message": "Not enough expense data"
        }

    # X = MONTH INDEX

    X = np.array(
        range(len(amounts))
    ).reshape(-1, 1)

    # Y = AMOUNTS

    y = np.array(amounts)

    # TRAIN MODEL

    model = LinearRegression()

    model.fit(X, y)

    # PREDICT NEXT VALUE

    next_month = np.array([[len(amounts)]])

    prediction = model.predict(next_month)[0]

    # TREND ANALYSIS

    trend = (
        "increasing"
        if prediction > np.mean(y)
        else "stable"
    )

    # AI MESSAGE

    message = (
        f"Your expenses are {trend}. "
        f"Predicted next expense is ₹{round(prediction, 2)}"
    )

    return {
        "prediction": round(float(prediction), 2),
        "message": message
    }