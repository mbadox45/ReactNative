import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { PaperProvider, Button, Avatar, Searchbar, Divider, Text, Appbar } from 'react-native-paper'

// Image
import PriaPicture from '../../assets/images/pria.png'

const Item = ({name, jenjang, gender, phone}) => {
  return (
    <TouchableOpacity>
        <View>
            <Avatar.Image size={50} source={PriaPicture}></Avatar.Image>
            <View style={{flexDirection:'column', width:'90%'}}>
                <View style={{marginLeft: 10, flexDirection: 'row', width:'95%', justifyContent:'space-between'}}>
                    <Text variant='titleSmall'>{name}</Text>
                    <Text variant='bodySmall'>{jenjang}</Text>
                </View>
                <View style={{marginLeft: 10, flexDirection: 'row', width:'95%', justifyContent:'space-between'}}>
                    <Text variant='bodySmall'>{gender}</Text>
                    <Text variant='bodySmall'>{phone}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default Item