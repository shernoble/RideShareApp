import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
// import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
// import Toast from 'react-native-toast-message';



export default function Home() {

  const [rides,setRides]=useState([]);
  


  useEffect(() => {

    if (rides === null) {
        axios
        .get('http://localhost:5050/guest/homepagefull')
        .then((response) => {
            // Update the state with the fetched data
            setAllListings(response.data);
            setIsLoading(false);
            console.log(allListings);

        })
        .catch(err => {
            console.log(err);
        });
    }
    }, [allListings]); 

  return (
    <View>
      <Text>Available Rides</Text>
      {/* results */}
    </View>
  )
}

const styles = StyleSheet.create({})