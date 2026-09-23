from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.database.mongodb import mongo_client
from app.database.postgresql import engine
from app.routes import health, locations


@asynccontextmanager
async def lifespan(app: FastAPI):
    yield
    mongo_client.close()
    engine.dispose()


app = FastAPI(title="Integradora educational prototype", lifespan=lifespan)
app.include_router(health.router)
app.include_router(locations.router)
