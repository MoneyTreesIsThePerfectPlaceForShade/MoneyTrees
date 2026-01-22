from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# операции определяются с после точки
# можно написать @app.post для POST запроса
@app.get("/")
async def root():
  return {"message": "May force be with you"}


@app.get("/star")
async def some():
  return {"message": "new endpoint"}

# Порядок имеет значение, сначала уникальные, потом наборы
@app.get("/items/bfg")
async def read_item():
  return {"item_id": 'big fucking gun'}


@app.get("/items/{item_id}")
async def read_item(item_id: int):
  return {"item_id": item_id}

# Код ниже требуется для CORS
# Vite dev server
origins = [
    "http://localhost",
    "http://127.0.0.1",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)