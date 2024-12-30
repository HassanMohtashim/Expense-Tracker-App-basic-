// src/screens/ExpenseGraphScreen.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';
import { PieChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ExpenseGraphScreen = () => {
  const [expenses, setExpenses] = useState([]);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Placeholder for fetching expenses from Firebase
    const fetchedExpenses = [
      { id: '1', category: 'Food', amount: 10, date: '2023-10-01' },
      { id: '2', category: 'Transport', amount: 15, date: '2023-10-02' },
      // Add more dummy data as needed
    ];
    setExpenses(fetchedExpenses);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const categories = {
    Food: { color: '#FF6347' },
    Transport: { color: '#1E90FF' },
    Shopping: { color: '#FF69B4' },
    Bills: { color: '#FFD700' },
    Miscellaneous: { color: '#8A2BE2' },
  };

  const getCategoryData = () => {
    const categoryTotals = expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = 0;
      }
      acc[expense.category] += expense.amount;
      return acc;
    }, {});

    return Object.keys(categoryTotals).map((category) => ({
      name: category,
      amount: categoryTotals[category],
      color: categories[category].color,
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    }));
  };

  const getWeeklyData = () => {
    const weekData = Array(7).fill(0);
    expenses.forEach((expense) => {
      const dayOfWeek = new Date(expense.date).getDay();
      weekData[dayOfWeek] += expense.amount;
    });
    return weekData;
  };

  const pieChartData = getCategoryData();
  const barChartData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: getWeeklyData(),
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={{ ...styles.chartContainer, opacity: fadeAnim }}>
        <Text style={styles.header}>Expense Distribution by Category</Text>
        <PieChart
          data={pieChartData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </Animated.View>

      <Animated.View style={{ ...styles.chartContainer, opacity: fadeAnim }}>
        <Text style={styles.header}>Weekly Expense Trends</Text>
        <BarChart
          data={barChartData}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          verticalLabelRotation={30}
          fromZero
        />
      </Animated.View>
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  chartContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default ExpenseGraphScreen;