import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const [theme, setTheme] = useState('light');
  const [currency, setCurrency] = useState('USD');
  const [fadeAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  const handleLogout = () => {
    // Placeholder for logout logic
    // Clear user session and navigate to the Login screen
    navigation.navigate('Login');
  };

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.formContainer, opacity: fadeAnim }}>
        <Text style={styles.header}>Settings</Text>

        <Text style={styles.label}>Theme Selection</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={theme}
            onValueChange={(itemValue) => setTheme(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Light Mode" value="light" />
            <Picker.Item label="Dark Mode" value="dark" />
          </Picker>
        </View>

        <Text style={styles.label}>Currency Preference</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={currency}
            onValueChange={(itemValue) => setCurrency(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="GBP" value="GBP" />
            <Picker.Item label="JPY" value="JPY" />
            {/* Add more currencies as needed */}
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  logoutButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;