import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Heart, Award, BookOpen } from 'lucide-react-native';

interface FinalStageScreenProps {
  navigation?: any;
  route?: {
    params: {
      score: number;
      answers: Array<{
        question: string;
        selectedAnswer: string;
        isCorrect: boolean;
        explanation: string;
      }>;
    };
  };
}

const getScoreCategory = (score: number) => {
  if (score >= 85) return 'excellent';
  if (score >= 70) return 'good';
  return 'needsWork';
};

const getScoreColor = (score: number) => {
  if (score >= 85) return '#4CAF50';
  if (score >= 70) return '#2196F3';
  return '#FF9800';
};

const getEmoji = (score: number) => {
  if (score >= 85) return '💝';
  if (score >= 70) return '💖';
  return '💗';
};

const FinalStageScreen: React.FC<FinalStageScreenProps> = ({ navigation, route }) => {
  const score = route?.params?.score ?? 0;
  const answers = route?.params?.answers ?? [];
  const scoreCategory = getScoreCategory(score);

  const getAdvice = () => {
    if (score >= 85) {
      return {
        title: "Excellent Connection!",
        message: [
          "Your relationship shows strong foundations of trust and understanding. To maintain and enhance this connection:",
          "• Continue practicing open communication daily",
          "• Plan regular quality time together",
          "• Share appreciation and gratitude often",
          "• Stay curious about each other's growth and changes"
        ]
      };
    }
    if (score >= 70) {
      return {
        title: "Good Progress!",
        message: [
          "You're building a healthy relationship. Here's how to strengthen it further:",
          "• Schedule weekly check-ins to discuss feelings and needs",
          "• Practice active listening without judgment",
          "• Try new activities together to create shared experiences",
          "• Express appreciation for specific actions your partner takes"
        ]
      };
    }
    return {
      title: "Room for Growth",
      message: [
        "Every relationship is a journey. Here are positive steps to take:",
        "• Start with small, daily acts of kindness",
        "• Share one positive observation about your partner each day",
        "• Practice patience and understanding",
        "• Consider relationship counseling to develop communication tools together"
      ]
    };
  };

  const advice = getAdvice();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFDEE9', '#B5FFFC']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.scoreSection}>
            <Text style={styles.emoji}>{getEmoji(score)}</Text>
            <Text style={[styles.score, { color: getScoreColor(score) }]}>
              {Math.round(score)}%
            </Text>
            <Text style={styles.scoreTitle}>{advice.title}</Text>
          </View>

          <View style={styles.adviceSection}>
            <View style={styles.sectionHeader}>
              <BookOpen color="#FF69B4" size={24} />
              <Text style={styles.sectionTitle}>Next Steps</Text>
            </View>
            {advice.message.map((item, index) => (
              <Text key={index} style={styles.adviceText}>{item}</Text>
            ))}
          </View>

          <View style={styles.insightsSection}>
            <View style={styles.sectionHeader}>
              <Heart color="#FF69B4" size={24} />
              <Text style={styles.sectionTitle}>Key Insights</Text>
            </View>
            {answers.map((answer, index) => (
              <View key={index} style={styles.insightItem}>
                <Text style={styles.insightText}>{answer.explanation}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Continue Journey</Text>
          </TouchableOpacity>
        </ScrollView>
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
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  scoreSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scoreTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  adviceSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  adviceText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
    lineHeight: 22,
  },
  insightsSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  insightItem: {
    marginBottom: 15,
  },
  insightText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignSelf: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    font