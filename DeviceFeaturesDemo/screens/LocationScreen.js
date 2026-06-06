import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Location from 'expo-location';

export default function LocationScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
  };

  return (
    <View style={styles.container}>
      <Button title="Get Location" onPress={getLocation} />
      {location && (
        <Text>
          Latitude: {location.coords.latitude} {'\n'}
          Longitude: {location.coords.longitude}
        </Text>
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});