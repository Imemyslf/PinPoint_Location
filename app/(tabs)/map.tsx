import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";
import * as Location from "expo-location";

export default function MapLocation() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 15.1093,
    longitude: 74.124,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });

  const [location, setLocation] = useState(null);
  const [sosMessage, setSosMessage] = useState(""); // State to hold SOS message

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setSosMessage("Permission denied to access location");
      return;
    }
    let loc = await Location.getCurrentPositionAsync();
    setLocation(loc);
    setMapRegion({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
      latitudeDelta: 0.5,
      longitudeDelta: 0.5,
    });
  };

  useEffect(() => {
    userLocation();
  }, []);

  const showMessage = () => {
    if (location) {
      setSosMessage(
        `SOS Message Clicked: Current location is (${location.coords.latitude}, ${location.coords.longitude})`
      );
    } else {
      setSosMessage("SOS Message Clicked: Location not found");
    }
    // 🔹 Clear the message after 5 seconds
    setTimeout(() => {
      setSosMessage("");
    }, 5000);
  };

  return (
    <>
      {sosMessage !== "" && (
        <View style={styles.messageBox}>
          <Text style={styles.messageText}>{sosMessage}</Text>
        </View>
      )}
      <View style={styles.container}>
        <MapView style={styles.map} region={mapRegion} showsMyLocationButton>
          <Marker coordinate={mapRegion} title="Marker" />
        </MapView>
        <Button title="Get Location" onPress={userLocation} />
        <TouchableOpacity style={styles.sos_btn} onPress={showMessage}>
          <Text style={styles.sos_text}>Send SOS Message</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    padding: 10,
  },
  map: {
    width: "100%",
    height: "50%",
  },
  sos_btn: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
  },
  sos_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  messageBox: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  messageText: {
    color: "white",
    fontSize: 16,
  },
});
