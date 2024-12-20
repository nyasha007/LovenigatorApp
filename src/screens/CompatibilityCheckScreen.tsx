import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompatibilityCheckScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Compatibility Check Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333'
  }
});

export default CompatibilityCheckScreen;