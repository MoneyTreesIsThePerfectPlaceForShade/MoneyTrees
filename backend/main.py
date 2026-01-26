from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# массив героев
HEROES = [
    {"id": 1, "name": "Человек-Паук"},
    {"id": 2, "name": "Железный Человек"},
    {"id": 3, "name": "Капитан Америка"},
    {"id": 4, "name": "Тор"},
    {"id": 5, "name": "Халк"},
    {"id": 6, "name": "Чёрная Вдова"},
    {"id": 7, "name": "Соколинный Глаз"},
    {"id": 8, "name": "Доктор Стрэндж"},
    {"id": 9, "name": "Чёрная Пантера"},
    {"id": 10, "name": "Сорвиголова"},
    {"id": 11, "name": "Наруто Узумаки"},
    {"id": 12, "name": "Саске Учиха"},
    {"id": 13, "name": "Сакура Харуно"},
    {"id": 14, "name": "Какаши Хатаке"},
    {"id": 15, "name": "Итачи Учиха"},
    {"id": 16, "name": "Эрен Йегер"},
    {"id": 17, "name": "Микаса Акерман"},
    {"id": 18, "name": "Армин Арлерт"},
    {"id": 19, "name": "Леви Акерман"},
    {"id": 20, "name": "Гоку"},
    {"id": 21, "name": "Вегета"},
    {"id": 22, "name": "Пикколо"},
    {"id": 23, "name": "Гохан"},
    {"id": 24, "name": "Транкс"},
    {"id": 25, "name": "Монки Д. Луффи"},
    {"id": 26, "name": "Ророноа Зоро"},
    {"id": 27, "name": "Нами"},
    {"id": 28, "name": "Усопп"},
    {"id": 29, "name": "Санджи"},
    {"id": 30, "name": "Сайтама"},
    {"id": 31, "name": "Генос"},
    {"id": 32, "name": "Татсумаки"},
    {"id": 33, "name": "Фубуки"},
    {"id": 34, "name": "Бэнг"},
    {"id": 35, "name": "Король"},
    {"id": 36, "name": "Лайт Ягами"},
    {"id": 37, "name": "L"},
    {"id": 38, "name": "Мисы Амане"},
    {"id": 39, "name": "Рюк"},
    {"id": 40, "name": "Рем"},
    {"id": 41, "name": "Субару Нацуки"},
    {"id": 42, "name": "Эмилия"},
    {"id": 43, "name": "Рем"},
    {"id": 44, "name": "Бельт"},
    {"id": 45, "name": "Пак"},
    {"id": 46, "name": "Канаде Тенсу"},
    {"id": 47, "name": "Акихабара"},
    {"id": 48, "name": "Танджиро Камадо"},
    {"id": 49, "name": "Незуко Камадо"},
    {"id": 50, "name": "Зеницу Агацума"},
    {"id": 51, "name": "Иноске Хашибира"},
    {"id": 52, "name": "Гию Томиока"},
    {"id": 53, "name": "Шинобу Кочо"},
    {"id": 54, "name": "Ренгоку Кёджуро"},
    {"id": 55, "name": "Майлз Моралес"},
    {"id": 56, "name": "Ванда Максимофф"},
    {"id": 57, "name": "Вижен"},
    {"id": 58, "name": "Сокол"},
    {"id": 59, "name": "Зимний Солдат"},
    {"id": 60, "name": "Локи"},
    {"id": 61, "name": "Дэдпул"},
    {"id": 62, "name": "Росомаха"},
    {"id": 63, "name": "Шторм"},
    {"id": 64, "name": "Циклоп"},
    {"id": 65, "name": "Джин Грей"},
    {"id": 66, "name": "Профессор Икс"},
    {"id": 67, "name": "Магнето"},
    {"id": 68, "name": "Гамбит"},
    {"id": 69, "name": "Джубилей"},
    {"id": 70, "name": "Спор"},
    {"id": 71, "name": "Ичиго Куросаки"},
    {"id": 72, "name": "Ренджи Абарай"},
    {"id": 73, "name": "Рукия Кучики"},
    {"id": 74, "name": "Орихиме Иноуэ"},
    {"id": 75, "name": "Урю Исида"},
    {"id": 76, "name": "Бьякуя Кучики"},
    {"id": 77, "name": "Кенпачи Зараки"},
    {"id": 78, "name": "Капитан Хицугая"},
    {"id": 79, "name": "Айзен Сосуке"},
    {"id": 80, "name": "Монки Д. Дракон"},
    {"id": 81, "name": "Нико Робин"},
    {"id": 82, "name": "Фрэнки"},
    {"id": 83, "name": "Брук"},
    {"id": 84, "name": "Трафальгар Ло"},
    {"id": 85, "name": "Йонко Кайдо"},
    {"id": 86, "name": "Шанкс"},
    {"id": 87, "name": "Биг Мам"},
    {"id": 88, "name": "Марко"},
    {"id": 89, "name": "Эйс"},
    {"id": 90, "name": "Сабо"},
    {"id": 91, "name": "Меллодас"},
    {"id": 92, "name": "Элизабет"},
    {"id": 93, "name": "Бан"},
    {"id": 94, "name": "Кор"},
    {"id": 95, "name": "Диана"},
    {"id": 96, "name": "Гриффин"},
    {"id": 97, "name": "Эсканор"},
    {"id": 98, "name": "Мерлин"},
    {"id": 99, "name": "Кинг"},
    {"id": 100, "name": "Гоух"}
]

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

@app.get("/heroes/{heroe}")
async def find_heroes(heroe: str):
    filtered_heroes = [
        hero for hero in HEROES 
        if heroe.lower() in hero["name"].lower()
    ]
    return filtered_heroes

# Код ниже требуется для CORS
# Vite dev server
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)