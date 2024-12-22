import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heart, MessageCircle, Check, HelpCircle } from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';

const stages = [
  {
    name: 'First Base',
    description: 'Initial attraction and connection building',
    route: 'Stage',
    icon: <Heart color="#FF69B4" size={24} />,
  },
  {
    name: 'Second Base',
    description: 'Deepening emotional bonds and understanding',
    route: 'Stage',
    icon: <MessageCircle color="#4A90E2" size={24} />,
  },
  {
    name: 'Third Base',
    description: 'Building trust and intimate connection',
    route: 'Stage',
    icon: <Check color="#50C878" size={24} />,
  },
  {
    name: 'Pop the Question',
    description: 'Final decision time!',
    route: 'PopTheQuestion',
    icon: <HelpCircle color="#9B59B6" size={24} />,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFDEE9', '#B5FFFC']}
        style={styles.gradient}
      >
        <Text style={styles.title}>Lovenigator</Text>
        <Text style={styles.subtitle}>Test Your Love Knowledge</Text>
        
        <View style={styles.buttonContainer}>
          {stages.map((stage, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => navigation.navigate(stage.route, { stageName: stage.name })}
              activeOpacity={0.9}
            >
              {stage.icon}
              <View style={styles.textContainer}>
                <Text style={styles.buttonText}>{stage.name}</Text>
                <Text style={styles.descriptionText}>{stage.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF1493',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  textContainer: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;