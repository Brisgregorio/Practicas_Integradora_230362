from fastapi import APIRouter, Depends

from app.auth.keycloak import current_user

router = APIRouter(prefix="/locations", tags=["locations"])


@router.get("")
def list_locations(user: dict = Depends(current_user)):
    # Deliberate fixture: database persistence is a future exercise.
    return [{"id": "demo", "name": "Mexico City", "latitude": 19.4326, "longitude": -99.1332}]
