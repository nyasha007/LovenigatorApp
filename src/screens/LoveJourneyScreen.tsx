import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoveJourneyScreen = () => {
  const levels = ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'];

  return (
    <LinearGradient
      colors={['#FFB6C1', '#FF69B4', '#FF1493']}
      style={styles.container}
    >
      <Text style={styles.title}>Love Journey</Text>
      <Text style={styles.description}>
        Complete levels to progress in your love journey!
      </Text>
      <View style={styles.levelsContainer}>
        {levels.map((level, index) => (
          <TouchableOpacity key={index} style={styles.levelButton}>
            <LinearGradient
              colors={['#FFFFFF', '#FF69B4']}
              style={styles.levelGradient}
            >
              <Text style={styles.levelText}>{level}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  levelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  levelButton: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  levelGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  levelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF1493',
    textShadowColor: '#FFF',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default LoveJourneyScreen;
