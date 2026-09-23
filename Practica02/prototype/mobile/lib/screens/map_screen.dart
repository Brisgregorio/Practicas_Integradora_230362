import 'package:flutter/material.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';

class MapScreen extends StatelessWidget {
  const MapScreen({super.key});

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(title: const Text('Educational map prototype')),
        body: Column(children: [
          Expanded(
            child: FlutterMap(
              options: const MapOptions(
                initialCenter: LatLng(19.4326, -99.1332),
                initialZoom: 12,
              ),
              children: [
                TileLayer(
                  urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                  userAgentPackageName: 'com.example.integradora_prototype',
                ),
                const MarkerLayer(markers: [
                  Marker(
                    point: LatLng(19.4326, -99.1332),
                    width: 40,
                    height: 40,
                    child: Icon(Icons.location_pin, color: Colors.red, size: 36),
                  ),
                ]),
              ],
            ),
          ),
          const SafeArea(
            top: false,
            child: Padding(
              padding: EdgeInsets.all(8),
              child: Text('© OpenStreetMap contributors · openstreetmap.org/copyright'),
            ),
          ),
        ]),
      );
}
