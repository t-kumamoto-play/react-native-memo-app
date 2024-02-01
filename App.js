import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Provider as PaperProvider,
  Title
} from 'react-native-paper';
import Main from './src/screens/MainScreen';
import Compose from './src/screens/ComposeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Main'
            component={Main}
            options={{
              title: 'メモ帳'
            }}
          />
          <Stack.Screen
            name='Compose'
            component={Compose}
            options={{
              title: '作成画面'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
