import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import StudentsScreen from './src/screens/StudentsScreen';
import FoodScreen from './src/screens/FoodScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as React from 'react';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          bottom: 20,
          position: 'absolute',
          left: 20,
          right: 20,
          height: 60,
          bottom: 15,
          borderRadius: 15,
          backgroundColor: '#062440'
        }
      }}>
        <Tab.Screen name='StudentsScreen' component={StudentsScreen}
          options={{
            title: 'Estudiantes',
            tabBarIcon: () => (
             <Ionicons name="book" size={25} color='white' />
            )
          }}
        ></Tab.Screen>
        <Tab.Screen name='Home' component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ()=>(
              <Ionicons name="home" size={25} color='white' />
            )
          }}
        ></Tab.Screen>
        <Tab.Screen name='ComidasScreen' component={FoodScreen}
          options={{
            title: 'Comidas favoritas',
            tabBarIcon: ()=>(
              <Ionicons name="heart" size={25} color='white' />
            )
          }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  navigation: {
    backgroundColor: 'red',
    marginBottom: 50,
    padding: 20
  },
});
