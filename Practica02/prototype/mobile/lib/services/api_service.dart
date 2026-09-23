import 'dart:convert';

import 'package:http/http.dart' as http;

class ApiService {
  static const baseUrl = String.fromEnvironment(
    'API_BASE_URL',
    defaultValue: 'http://localhost:8000',
  );

  Future<Map<String, dynamic>> health() async {
    final response = await http.get(Uri.parse('$baseUrl/health'))
        .timeout(const Duration(seconds: 10));
    if (response.statusCode != 200) {
      throw Exception('Health request failed (${response.statusCode})');
    }
    return jsonDecode(response.body) as Map<String, dynamic>;
  }

  Future<List<dynamic>> locations(String accessToken) async {
    final response = await http.get(
      Uri.parse('$baseUrl/locations'),
      headers: {'Authorization': 'Bearer $accessToken'},
    ).timeout(const Duration(seconds: 10));
    if (response.statusCode != 200) {
      throw Exception('Locations request failed (${response.statusCode})');
    }
    return jsonDecode(response.body) as List<dynamic>;
  }
}
