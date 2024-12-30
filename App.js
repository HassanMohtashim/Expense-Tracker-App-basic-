// App.js
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./src/navigation/Navigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}