import os
from app.database import engine, Base
from app import models

print("Current working directory:", os.getcwd())

Base.metadata.create_all(bind=engine)

print("Tables created successfully!")