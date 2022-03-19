import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigator/AppNavigator';
import SignUp from './src/screen/SignUp';

export default function App() {
  return (
     <AppNavigator/>
  );
}


