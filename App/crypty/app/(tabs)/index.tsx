import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectImageScreen from '../SelectImageScreen';
import ValidateImageScreen from '../ValidateImageScreen';
import ValidateUrlScreen from '../ValidateUrlScreen';
import ResultScreen from '../ResultScreen';
import TutorialCrypty from '../TutorialCrypty';
import MasInfo from '../MasInfo';

type RootStackParamList = {
  SelectImage: undefined;
  TutorialCrypty: undefined;
  ValidateImage: { imageUri: string };
  ValidateUrl: { url: string };
  ResultScreen: { imageUri: string, validationResult: number };
  MasInfo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="SelectImage"  screenOptions={{headerShown: false}}>
        <Stack.Screen name="SelectImage" component={SelectImageScreen} options={{ title: 'Seleccionar imagen' }} />
        <Stack.Screen name="ValidateImage" component={ValidateImageScreen} options={{ title: 'Validar imagen' }} />
        <Stack.Screen name="ValidateUrl" component={ValidateUrlScreen} options={{ title: 'Validar URL' }} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title: 'Resultado' }} />
        <Stack.Screen name="TutorialCrypty" component={TutorialCrypty} options={{ title: 'TutorialCrypty' }} />
        <Stack.Screen name="MasInfo" component={MasInfo} options={{ title: 'MasInfo' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
