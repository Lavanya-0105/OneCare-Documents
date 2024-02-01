import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to Our Health App!</Text>
      <Text>Explore various features to manage your health needs:</Text>
      <TouchableOpacity onPress={() => navigation.navigate('DrugInformation')}>
        <Text>Drug Information</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SymptomChecker')}>
        <Text>Symptom Checker</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AppointmentBooking')}>
        <Text>Appointment Booking</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FitnessTracker')}>
        <Text>Fitness Tracker</Text>
      </TouchableOpacity>
      {/* Add more features as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
