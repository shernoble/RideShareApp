import {ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField';
import CheckBox from '@react-native-community/checkbox';
export default function CreateRide() {

  const [isSubmitting, setSubmitting] = useState(false);
  const [from,setFrom]=useState("");
  const [to,setTo]=useState("");
  const [time,setTime]=useState("");
  const [seats,setSeats]=useState(1);
  const [paid,setPaid]=useState(false);

  const submit = async() => {
    console.log(from,to);
    const formData = {

    }
    // TODO: send call to backend

    // TODO: give success/failure notification
  }

  return (
    <SafeAreaView className="bg-primary h-full">
    {/* form */}
    {/* name and contact number autofill hoga */}
    <ScrollView className="px-4 my-6">
      <View
      className="w-full flex justify-center h-full "
      >
        {/* place the title */}
        <Text className="text-2xl font-psemibold text-white">
          Create a Ride
        </Text>
        <FormField
          title="From"
          value={from}
        />
        <FormField
          title="To"
          value={to}
        />
        <FormField
          title="Time"
          value={time}
        />
        <FormField
          title="Seats"
          value={seats}
        />
        {/* put checkbox for paid -when ticked, give option to put cost per person */}
        <CustomButton
            title="Create Ride"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
        />
      </View>
    </ScrollView>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})