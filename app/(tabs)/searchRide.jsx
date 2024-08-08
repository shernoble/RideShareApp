import React, { useState } from 'react';
import { View,TouchableOpacity, Text, SafeAreaView, StyleSheet, Button, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Checkbox from 'expo-checkbox';
import { Picker } from '@react-native-picker/picker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default function SearchRide() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handlePaid = () => {
    setIsPaid(!isPaid);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Search a Ride</Text>

        <Text style={styles.label}>Source</Text>
        <Picker
          selectedValue={source}
          onValueChange={(itemValue) => setSource(itemValue)}
          style={pickerSelectStyles.input}
        >
          <Picker.Item label="Select a city" value="" />
          <Picker.Item label="City A" value="cityA" />
          <Picker.Item label="City B" value="cityB" />
          <Picker.Item label="City C" value="cityC" />
        </Picker>

        <Text style={styles.label}>Destination</Text>
        <Picker
          selectedValue={destination}
          onValueChange={(itemValue) => setDestination(itemValue)}
          style={pickerSelectStyles.input}
        >
          <Picker.Item label="Select a city" value="" />
          <Picker.Item label="City A" value="cityA" />
          <Picker.Item label="City B" value="cityB" />
          <Picker.Item label="City C" value="cityC" />
        </Picker>

        <Text style={styles.label}>Date</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
            style={styles.datePicker}
          />
        )}

        <Text style={styles.label}>Time</Text>
        <Picker
          selectedValue={time}
          onValueChange={(itemValue) => setTime(itemValue)}
          style={pickerSelectStyles.input}
        >
          <Picker.Item label="Select a time" value="" />
          <Picker.Item label="Morning" value="morning" />
          <Picker.Item label="Noon" value="noon" />
          <Picker.Item label="Evening" value="evening" />
          <Picker.Item label="Night" value="night" />
        </Picker>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isPaid}
            onValueChange={handlePaid}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Paid/Free</Text>
        </View>
        {isPaid &&
        <View>
            <Text style={styles.label}>Cost Per Person</Text>
            <input/>
        </View>
        }
        <Button title="Search" onPress={() => { /* Handle search logic here */ }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  datePicker: {
    width: '100%',
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: "center",
    marginRight: 8,
  },
});

const pickerSelectStyles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    marginBottom: 16,
    width: '100%',
  },
});
