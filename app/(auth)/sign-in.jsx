import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  // TODO: take phone number instead of email
  const [isSubmitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleChangeEmail = (emailVal) => {
    setEmail(emailVal);
    setEmailVerify(false);
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (reg.test(emailVal)) {
      setEmailVerify(true);
    }
  };

  const handleChangePassword = (passwordVal) => {
    setPassword(passwordVal);
  };


  const submit = async () => {
    console.log(email, password);
    const userData = {
      email: email,
      password,
    };
    router.push('/searchRide');
    // axios.post(`${backendUrl}/user/login`, userData).then(res => {
    //   console.log(res.data);
    //   if (res.data.status == 'ok') {
    //     Alert.alert('Logged In Successfull');
    //     AsyncStorage.setItem('token', res.data.data);
    //     AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
    //     AsyncStorage.setItem('userType',res.data.userType)
    //     // navigation.navigate('Home');
    //     if(res.data.userType=="Admin"){
    //       navigation.navigate('AdminScreen');
    //     }else{
    //       navigation.navigate('home');
    //     }
      
    //   }
    // });
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          {/* <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          /> */}

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to RideShare
          </Text>

          <FormField
            title="Email"
            value={email}
            handleChangeText={handleChangeEmail}
            otherStyles="mt-7"
            keyboardType="email-address"
            verify={emailVerify}
          />
          
          <FormField
            title="Password"
            value={password}
            handleChangeText={handleChangePassword}
            otherStyles="mt-7"
            secureTextEntry={true} // Assuming password field should be secure
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
