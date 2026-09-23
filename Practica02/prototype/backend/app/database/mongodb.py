import os

from motor.motor_asyncio import AsyncIOMotorClient

mongo_client = AsyncIOMotorClient(
    os.environ["MONGODB_URL"], serverSelectionTimeoutMS=5000
)
database = mongo_client[os.getenv("MONGODB_DATABASE", "integradora")]
