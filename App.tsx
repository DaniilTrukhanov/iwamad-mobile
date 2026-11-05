import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [likes, setLikes] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, World!</Text>
      <Text style={styles.name}>Daniil Trukhanov</Text>
      <Text style={styles.likes}>Likes: {likes}</Text>
      <Pressable onPress={ () => setLikes(likes + 1) } style = {styles.button}>
        <Text style = {styles.buttonText}>Like</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
  },
  name: {
    fontSize: 32,
  },
  likes: {
    fontSize: 16,
  },
  button: {
    minHeight: 44,
  },
  buttonText: {
    fontSize: 32,
  },
});
