// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, StatusBar  } from 'react-native';

// Context
import { SiswaContext } from './SiswaContext';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Screens
import HomeScreen from './frontend/screens/HomeScreen';
import DetailScreen from './frontend/screens/DetailScreen';
import TambahScreen from './frontend/screens/TambahScreen';
import LoginScreen from './frontend/screens/LoginScreen';

// With Navigation
export default function App() {
  const [context,setContext] = useState(2);
  return (
    <SiswaContext.Provider value={[context,setContext]}>
      <SafeAreaView style={styles.container}>
          <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Detail" component={DetailScreen} />
                  <Stack.Screen name="Form" component={TambahScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaView>
    </SiswaContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});