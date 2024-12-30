// src/screens/ExpenseListScreen.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const categories = {
  Food: { icon: 'cutlery', color: '#FF6347' },
  Transport: { icon: 'bus', color: '#1E90FF' },
  Shopping: { icon: 'shopping-cart', color: '#FF69B4' },
  Bills: { icon: 'file-text', color: '#FFD700' },
  Miscellaneous: { icon: 'random', color: '#8A2BE2' },
};

const ExpenseListScreen = () => {
  const [expenses, setExpenses] = useState([]);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Placeholder for fetching expenses from Firebase
    const fetchedExpenses = [
      { id: '1', category: 'Food', amount: '10', date: '2023-10-01', description: 'Lunch' },
      { id: '2', category: 'Transport', amount: '15', date: '2023-10-02', description: 'Bus fare' },
      // Add more dummy data as needed
    ];
    setExpenses(fetchedExpenses);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const renderExpenseItem = ({ item }) => (
    <View style={styles.expenseItem}>
      <FontAwesome name={categories[item.category].icon} size={24} color={categories[item.category].color} />
      <View style={styles.expenseDetails}>
        <Text style={styles.expenseCategory}>{item.category}</Text>
        <Text style={styles.expenseDescription}>{item.description}</Text>
        <Text style={styles.expenseAmount}>${item.amount}</Text>
        <Text style={styles.expenseDate}>{item.date}</Text>
      </View>
    </View>
  );

  const groupedExpenses = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = [];
    }
    acc[expense.category].push(expense);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.listContainer, opacity: fadeAnim }}>
        {Object.keys(groupedExpenses).map((category) => (
          <View key={category}>
            <Text style={styles.categoryHeader}>{category}</Text>
            <FlatList
              data={groupedExpenses[category]}
              renderItem={renderExpenseItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContainer: {
    padding: 20,
  },
  categoryHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  expenseDetails: {
    marginLeft: 10,
  },
  expenseCategory: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  expenseDescription: {
    fontSize: 14,
    color: '#666',
  },
  expenseAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  expenseDate: {
    fontSize: 12,
    color: '#999',
  },
});

export default ExpenseListScreen;