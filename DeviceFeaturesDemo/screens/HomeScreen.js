import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Features Demo</Text>
      <CustomButton title="Camera" onPress={() => navigation.navigate('Camera')} />
      <CustomButton title="Location" onPress={() => navigation.navigate('Location')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 30 },
});