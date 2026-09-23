# Minimal educational architecture prototype

This is a minimal educational prototype, not a production application or a
complete mobile project. It illustrates Flutter → Keycloak / FastAPI → PostgreSQL
and MongoDB, with an OpenStreetMap map rendered by `flutter_map` (not Leaflet).
No real credentials are included. No packages were installed to create it.

## Components and scope

- `mobile/lib/main.dart` creates a MaterialApp with a static map and demo marker.
- `AuthService` represents public-client authorization-code authentication with
  PKCE; `ApiService` represents health and authenticated location requests.
  These services are intentionally not wired to the map screen yet.
- `GET /health` is public liveness only, not a database/readiness check.
- `GET /locations` requires a signed, unexpired Keycloak JWT with the configured
  issuer, audience and authorized client. It returns a fixed educational fixture.
- SQLAlchemy and Motor provide connection examples. No tables, collections,
  migrations or actual database reads/writes are implemented yet.
- Compose defines the API, PostgreSQL, MongoDB and Keycloak. Only the API and
  Keycloak ports are published, on loopback. MongoDB has no authentication in
  this isolated development example. `depends_on` does not guarantee readiness.

## Development configuration

From this directory, copy `.env.example` to `.env` locally. Do not commit `.env`,
tokens or credentials. The example passwords are public development placeholders.
`POSTGRES_URL` must agree with the PostgreSQL user, password and database values;
URL-encode credentials if you change them. Docker DNS names in the URLs work
inside Compose; use host-specific URLs when running the API elsewhere.

With Docker already available, the following are optional commands for you to
run later. Building downloads images and installs the declared Python packages
inside the container; it was not executed as part of creating this prototype.

```sh
docker compose config --quiet
docker compose up --build
```

Open `http://localhost:8000/docs` or `http://localhost:8000/health`.
Without a token, `/locations` returns 401. Once Keycloak is ready, its console is
at `http://localhost:8080`; use the development admin values from your local env.
The realm import creates `integradora` and the public client `flutter-mobile`.
There are no predefined users or client secrets. Create a disposable development
user in that realm to exercise authentication.

The import requires S256 PKCE and permits only the example redirect
`http://localhost:3000/callback`. No callback listener is supplied. A future login
integration must generate a cryptographically random verifier and state, derive
the S256 challenge, launch the system browser, handle the callback and verify
state before calling `exchangeCode`. It must also handle expiry, refresh and
server logout. Password grants are disabled. The audience mapper lets the API
validate `flutter-mobile` as this prototype's audience.

`KEYCLOAK_ISSUER` is the externally visible issuer and must exactly match issued
tokens. `KEYCLOAK_JWKS_URL` is the internal Compose URL for fetching signing keys.
Changing ports or hostname requires consistent issuer and client configuration.
PostgreSQL and MongoDB use named volumes; Keycloak uses disposable development
storage, so manually created users can be lost when its container is recreated.

## Flutter scaffold

`mobile` contains Dart source and a dependency manifest only. Generated Android,
iOS, desktop and web runners and package lockfiles are deliberately absent.
To run it later, use an existing Flutter development environment, generate the
platform runner you need and resolve the dependencies yourself. No Flutter or
package installation is performed here.

Flutter uses compile-time environment values supplied with `--dart-define`,
not the Compose `.env` file:

```text
--dart-define=API_BASE_URL=http://localhost:8000
--dart-define=KEYCLOAK_ISSUER=http://localhost:8080/realms/integradora
--dart-define=KEYCLOAK_CLIENT_ID=flutter-mobile
--dart-define=KEYCLOAK_REDIRECT_URI=http://localhost:3000/callback
```

These defaults describe a host-local demo. Android emulators commonly access
the host at `10.0.2.2`; physical devices need a reachable host address. Adapting
the demo requires consistent Keycloak hostname/issuer, redirect registration,
port bindings and platform network settings. Flutter web additionally requires
an explicit API CORS policy, which this native-client scaffold does not supply.
HTTP is development-only; production needs HTTPS and a complete security design.

The map fetches public OpenStreetMap tiles over the network and displays
attribution. It does not require login or retrieve the API fixture. It is for
small interactive demonstrations, not offline tile downloads or bulk traffic.

## Suggested exercises

Connect the browser-based PKCE flow to the app, pass the in-memory access token
to `ApiService.locations`, render returned locations, and replace the fixture
with database-backed queries. Add migrations, readiness checks and appropriate
tests as those features are implemented. Motor is included for this exercise
as requested; evaluate its maintenance status before building a production app.

The existing architecture files and repository root README are unchanged.
