import { View, Text } from 'react-native'
import React from 'react'

const FormLabel = ({text}) => {
  return (
    <View>
      <Text style={{color:'purple', fontSize: 15, marginLeft:5, marginTop:10}}>{text}</Text>
    </View>
  )
}

export default FormLabel