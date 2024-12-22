import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('../assets/images/welcomescreen1.jpeg')} 
        style={styles.logo} 
      />

      {/* Title */}
      <Text style={styles.title}>Welcome to LOVENIGATOR</Text>
      <Text style={styles.subtitle}>Navigate Your Way to True Love</Text>

      {/* Get Started Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F7F8', // Light turquoise background
  },
  logo: {
    width: 150,
    height
