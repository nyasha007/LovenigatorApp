import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { Heart, MessageCircle, Check, HelpCircle } from 'lucide-react-native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const navigationButtons = [
  {
    name: 'Love Journey',
    route: 'LoveJourney',
    icon: Heart,
    color: '#FF69B4',
  },
  {
    name: 'Real Talk Zone',
    route: 'RealTalkZone',
    icon: MessageCircle,
    color: '#4A90E2',
  },
  {
    name: 'Compatibility Check',
    route: 'CompatibilityCheck',
    icon: Check,
    color: '#50C878',
  },
  {
    name: 'The Big Question',
    route: 'TheBigQuestion',
    icon: HelpCircle,
    color: '#9B59B6',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {navigationButtons.map((button) => (
        <TouchableOpacity
          key={button.route}
          style={[styles.button, { backgroundColor: button.color }]}
          onPress={() => navigation.navigate(button.route)}
        >
          <button.icon color="white" size={24} />
          <Text style={styles.buttonText}>{button.name}</Text>
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
    gap: 20,
    backgroundColor: '#F5F5F5',
  },
  button: {
    width: '100%',
    height: 80,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default HomeScreen;
