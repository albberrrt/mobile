import 'react-native-gesture-handler';
import { NativeBaseProvider } from "native-base";
import { Flex, HamburgerIcon, Heading, StatusBar, Box } from "native-base";

import DefaultCalc from "./src/screens/DefaultCalc";
import SquareCalc from './src/screens/SquareCalc';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#f59e0b" />
        
      <DefaultCalc />
    </NativeBaseProvider>
  );
}
