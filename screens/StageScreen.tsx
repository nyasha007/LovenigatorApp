import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Quiz from '../components/Quiz';
import { firstBaseQuiz } from '../data/quizData';

const StageScreen = ({ navigation, route }) => {
  const handleQuizComplete = (score) => {
    navigation.navigate('PopTheQuestion', { 
      score: score,
      totalQuestions: firstBaseQuiz.length 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFDEE9', '#B5FFFC']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Quiz 
            questions={firstBaseQuiz} 
            onComplete={handleQuizComplete}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default StageScreen;