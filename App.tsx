import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from './screens/HomeScreen';
import StageScreen from './screens/StageScreen';
import FinalStageScreen from './screens/FinalStageScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <LinearGradient
      colors={['#E6E6FA', '#FFFAFA']} // Light lavender to white
      style={{ flex: 1 }}
    >
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerTintColor: '#555',
            headerTransparent: true,
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Stage" 
            component={StageScreen} 
          />
          <Stack.Screen 
            name="PopTheQuestion" 
            component={FinalStageScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
};

export default App;