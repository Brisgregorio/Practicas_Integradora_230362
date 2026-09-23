import 'dart:convert';

import 'package:http/http.dart' as http;

/// Keycloak authorization-code + PKCE boundary, not a complete login UI.
/// The caller generates a secure verifier, its S256 challenge, and random state,
/// opens the system browser, captures the redirect, and verifies returned state.
class AuthService {
  static const issuer = String.fromEnvironment(
    'KEYCLOAK_ISSUER',
    defaultValue: 'http://localhost:8080/realms/integradora',
  );
  static const clientId = String.fromEnvironment(
    'KEYCLOAK_CLIENT_ID',
    defaultValue: 'flutter-mobile',
  );
  static const redirectUri = String.fromEnvironment(
    'KEYCLOAK_REDIRECT_URI',
    defaultValue: 'http://localhost:3000/callback',
  );

  String? accessToken; // Memory only; never persisted or logged.

  Uri authorizationUri({required String challenge, required String state}) =>
      Uri.parse('$issuer/protocol/openid-connect/auth').replace(queryParameters: {
        'client_id': clientId,
        'redirect_uri': redirectUri,
        'response_type': 'code',
        'scope': 'openid',
        'code_challenge': challenge,
        'code_challenge_method': 'S256',
        'state': state,
      });

  Future<void> exchangeCode({
    required String code,
    required String verifier,
  }) async {
    accessToken = null;
    final response = await http.post(
      Uri.parse('$issuer/protocol/openid-connect/token'),
      body: {
        'grant_type': 'authorization_code',
        'client_id': clientId,
        'redirect_uri': redirectUri,
        'code': code,
        'code_verifier': verifier,
      },
    ).timeout(const Duration(seconds: 10));
    if (response.statusCode != 200) {
      throw Exception('Keycloak token exchange failed (${response.statusCode})');
    }
    final data = jsonDecode(response.body) as Map<String, dynamic>;
    accessToken = data['access_token'] as String;
  }

  void clearSession() => accessToken = null; // Local only, not server logout.
}
