SHELL := /bin/bash

# TODO: настроить в будущем Caddy для проксирования запросов
dev:
	@(cd frontend && npm run dev) & (cd backend && source .venv/bin/activate && fastapi dev main.py --port 8002) & wait