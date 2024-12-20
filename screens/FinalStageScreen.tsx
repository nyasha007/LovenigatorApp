import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const FinalStageScreen = () => {
  const calculateFinalScore = () => {
    // Placeholder logic
    const finalScore = Math.floor(Math.random() * 100);
    return finalScore;
  };

  const finalScore = calculateFinalScore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pop the Question</Text>
      <Text style={styles.description}>
        Congratulations on making it this far! Your relationship readiness score is:
      </Text>
      <Text style={styles.score}>{finalScore}%</Text>
      <Button
        title="Next Steps"
        onPress={() => alert(finalScore > 80 ? 'You’re ready!' : 'Work on a few things first!')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF69B4',
    marginVertical: 20,
  },
});

export default FinalStageScreen;
