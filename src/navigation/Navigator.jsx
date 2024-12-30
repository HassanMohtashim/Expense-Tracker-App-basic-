// src/navigation/AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import ExpenseListScreen from "../screens/ExpenseListScreen";
import ExpenseGraphScreen from "../screens/ExpenseGraphScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AddExpenseScreen" component={AddExpenseScreen}/>
      <Stack.Screen name="ExpenseListScreen" component={ExpenseListScreen}/>
      <Stack.Screen name="ExpenseGraphScreen" component={ExpenseGraphScreen}/>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen}/> 
    </Stack.Navigator>
  );
};

export default AppNavigator;