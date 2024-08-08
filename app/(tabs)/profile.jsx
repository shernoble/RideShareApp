import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
// import Toast from 'react-native-toast-message';

export default function Profile(props) {
  const navigation = useNavigation();
  console.log(props);
  const [userData, setUserData] = useState('');
  const backendUrl=process.env.REACT_APP_BACKEND_URL;

  async function getData() {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    axios
      .post(`${backendUrl}userdata`, {token: token})
      .then(res => {
        console.log(res.data);
        setUserData(res.data.data);
      });
  }
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}
