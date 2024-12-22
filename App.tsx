import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import StageScreen from './screens/StageScreen';
import FinalStageScreen from './screens/FinalStageScreen';
import { ErrorBoundary } from 'react-error-boundary';

// Define the type for our navigation stack
export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Stage: undefined;
  PopTheQuestion: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const ErrorFallback = () => (
  <LinearGradient
    colors={['#E6E6FA', '#FFFAFA']}
    style={styles.container}
  >
    <Text style={styles.errorText}>Something went wrong. Please restart the app.</Text>
  </LinearGradient>
);

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <LinearGradient
        colors={['#E6E6FA', '#FFFAFA']}
        style={styles.container}
      >
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Welcome"
            screenOptions={{
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTintColor: '#555',
              headerTransparent: true,
            }}
          >
            <Stack.Screen 
              name="Welcome" 
              component={WelcomeScreen} 
              options={{ headerShown: false }}
            />
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
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    color: '#555',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
});

export default App;
