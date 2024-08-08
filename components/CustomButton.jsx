import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyles,textStyles,isLoading}) => {
  return (
    <TouchableOpacity
    className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center 
    ${containerStyles}
    ${isLoading?'opacity-50':''}`}
    disabled={isLoading}
    onPress={handlePress}
    activeOpacity={0.7}
    >
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton