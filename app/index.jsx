import { ScrollView, StatusBar,TouchableOpacity } from 'react-native'
import { Redirect,router } from 'expo-router'
import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'

export default function App() {

  return (

    <SafeAreaView className="h-full bg-white">
      {/* <Text className="text-3xl font-pblack">RideShareApp</Text>
      <StatusBar style="auto"/>
      <Link href="/home">Go to Home</Link> */}
      <ScrollView contentContainerStyle={{
        height:"100%"
      }}>
      <View className="w-full justify-center items-center h-full px-4 ">
        <Text className="text-3xl font-pblack">RideShareApp</Text>
        <StatusBar style="auto"/>
        
        <CustomButton
          title="Continue with Email"
          handlePress={() => {router.push("/sign-in")}}
          containerStyles="w-full mt-7"
        />
      </View>

      

      </ScrollView>
      {/* change statusbar background to show time and battery on top depending on bg color */}
      <StatusBar backgroundColor='white' style='light'/>
    </SafeAreaView>
  )
}

