from fastapi import APIRouter

router = APIRouter(tags=["health"])


@router.get("/health")
def health():
    # Liveness only: does not claim that databases or Keycloak are ready.
    return {"status": "ok", "mode": "educational-prototype"}
