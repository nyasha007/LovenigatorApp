import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heart, MessageCircle, Check, HelpCircle } from 'lucide-react-native';

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
    <View style={styles.container}>
      {stages.map((stage, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(stage.route, { stageName: stage.name })}
        >
          {stage.icon}
          <Text style={styles.buttonText}>{stage.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E6E6FA', // Neutral but colorful background
  },
  button: {
    width: '90%',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)', // Glassy outline
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555', // Neutral text color
  },
});

export default HomeScreen;