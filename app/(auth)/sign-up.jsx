import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

// import {createUser} from "../../lib/appwrite";

import { images } from "../../constants";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [nameVerify, setNameVerify] = useState(false);

  const handleChangeName = (nameVal) => {
    setName(nameVal);
    setNameVerify(false);
    if(nameVal.length>1){
      setNameVerify(true);
    }
  };

  const handleChangeEmail = (emailVal) => {
    setEmail(emailVal);
    setEmailVerify(false);
    const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (reg.test(emailVal)) {
      setEmail(emailVal);
      setEmailVerify(true);
    }
  };

  const handleChangePassword = (passwordVal) => {
    setPassword(passwordVal);
  };

  const submit= async() => {
    if(email=="" || password=="" || username==""){
      Alert.alert("Please fill all the fields");
      return;
    }
    setSubmitting(true);
    try{
      // send req to backend
      router.replace('/home');
    }
    catch(error){
      Alert.alert('Erromlmr',error.message);
    }
    finally{
      setSubmitting(false);
    }
  }
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
            Register to RideShare
          </Text>

          <FormField
            title="UserName"
            value={name}
            handleChangeText={handleChangeName}
            otherStyles="mt-7"
            verify={nameVerify}
          />

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
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              SignIn
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp