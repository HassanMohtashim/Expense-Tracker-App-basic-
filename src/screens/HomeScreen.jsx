// src/screens/HomeScreen.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Placeholder for fetching total expenses from Firebase
    // You can replace this with your Firebase fetching logic
    const fetchTotalExpenses = async () => {
      // Simulate fetching data
      const total = 500; // Replace with actual data fetching
      setTotalExpenses(total);
    };

    fetchTotalExpenses();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.summaryContainer, opacity: fadeAnim }}>
        <Text style={styles.summaryText}>Total Expenses: ${totalExpenses}</Text>
      </Animated.View>

      <Animated.View style={{ ...styles.buttonContainer, opacity: fadeAnim }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddExpenseScreen')}
        >
          <Text style={styles.buttonText}>Add Expense</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExpenseListScreen')}
        >
          <Text style={styles.buttonText}>Expense List</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExpenseGraphScreen')}
        >
          <Text style={styles.buttonText}>Expense Graph</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  summaryContainer: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  summaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;