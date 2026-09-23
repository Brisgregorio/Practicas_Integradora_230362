import os

import jwt
from fastapi import Depends, HTTPException
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

ISSUER = os.environ["KEYCLOAK_ISSUER"]
CLIENT_ID = os.environ["KEYCLOAK_CLIENT_ID"]
jwks = jwt.PyJWKClient(os.environ["KEYCLOAK_JWKS_URL"], timeout=5)
bearer = HTTPBearer(auto_error=False)


def current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer),
) -> dict:
    if credentials is None:
        raise HTTPException(401, "Bearer token required", headers={"WWW-Authenticate": "Bearer"})
    try:
        key = jwks.get_signing_key_from_jwt(credentials.credentials)
        claims = jwt.decode(
            credentials.credentials,
            key.key,
            algorithms=["RS256"],
            issuer=ISSUER,
            audience=CLIENT_ID,
            options={"require": ["exp", "iat", "sub", "iss", "aud"]},
        )
        if claims.get("azp") != CLIENT_ID:
            raise jwt.InvalidTokenError("Unexpected client")
        return claims
    except jwt.PyJWKClientConnectionError as exc:
        raise HTTPException(503, "Identity service unavailable") from exc
    except jwt.PyJWTError as exc:
        raise HTTPException(
            401, "Invalid or expired token", headers={"WWW-Authenticate": "Bearer"}
        ) from exc
