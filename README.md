# ExpenseHub

ExpenseHub is a modern full-stack expense tracking application built using FastAPI and React.  
It helps users manage daily expenses, visualize spending patterns, and monitor financial activity through interactive dashboards and charts.

---

## Features

- User Authentication (JWT)
- Add, Edit, Delete Expenses
- Expense Categories
- Dashboard Analytics
- Monthly Expense Charts
- Pie Chart Visualization
- Responsive UI
- FastAPI Backend
- React Frontend

---

## Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- FastAPI
- SQLAlchemy
- SQLite
- JWT Authentication

---

## Project Structure

```bash
ExpenseHub/
│
├── backend/
│   ├── app/
│   └── init_db.py
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/AkshitSingh28/ExpenseHub.git
```

---

## Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs on:
```bash
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
```bash
http://localhost:5173
```

---

## Screenshots

_Add project screenshots here_

---

## Future Improvements

- Export expenses to PDF
- Budget management
- Dark mode
- AI expense insights
- OCR receipt scanning

---

## Author

Akshit Singh

GitHub:
https://github.com/AkshitSingh28
