import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface QuizProps {
  questions: any[];
  onComplete: (score: number, answers: any[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedIndex: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const newScore = selectedIndex === currentQuestion.correctAnswer 
      ? score + (currentQuestion.weight || 1) * 100
      : score;
    
    const newAnswers = [...answers, {
      question: currentQuestion.question,
      selectedAnswer: currentQuestion.options[selectedIndex],
      isCorrect: selectedIndex === currentQuestion.correctAnswer,
      explanation: selectedIndex === currentQuestion.correctAnswer 
        ? currentQuestion.explanation.positive 
        : currentQuestion.explanation.needsWork
    }];

    setScore(newScore);
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate final percentage
      const maxPossibleScore = questions.reduce((acc, q) => acc + ((q.weight || 1) * 100), 0);
      const finalPercentage = (newScore / maxPossibleScore) * 100;
      onComplete(finalPercentage, newAnswers);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFDEE9', '#B5FFFC']}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.progress}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </Text>
          
          <Text style={styles.question}>
            {questions[currentQuestionIndex].question}
          </Text>

          <View style={styles.optionsContainer}>
            {questions[currentQuestionIndex].options.map((option: string, index: number) => (
              <TouchableOpacity
                key={index}
                style={styles.optionButton}
                onPress={() => handleAnswer(index)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
    padding: 20,
    justifyContent: 'center',
  },
  progress: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 30,
  },
  optionsContainer: {
    width: '100%',
  },
  optionButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  optionText: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
});

export default Quiz;