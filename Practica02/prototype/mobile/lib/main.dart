import 'package:flutter/material.dart';

import 'screens/map_screen.dart';

void main() => runApp(const PrototypeApp());

class PrototypeApp extends StatelessWidget {
  const PrototypeApp({super.key});

  @override
  Widget build(BuildContext context) => MaterialApp(
        title: 'Integradora prototype',
        theme: ThemeData(colorSchemeSeed: Colors.teal, useMaterial3: true),
        home: const MapScreen(),
      );
}
