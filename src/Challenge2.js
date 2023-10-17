import { View, TextInput, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Challenge2 = () => {
  const [age, setAge] = useState('')
  const [nilai, setNilai] = useState('')

  const pencet = () => {
    if (Number(age) > 18 && age !== '') {
        setNilai('Legal');
        console.log(nilai);
    } else if (Number(age) <= 18 && age !== '') {
        setNilai('Ilegal');
        console.log(nilai)
    } else {
        setNilai('');
        console.log(nilai)
    }
  }

  return (
    <View>
        <View style={{}}>
            <Text>Age</Text>
            <TextInput keyboardType='numeric' placeholder='Age' style={{borderBottomColor:'#8E44AD', paddingHorizontal:'2%', paddingVertical:'2%', marginVertical:'2%', borderBottomWidth:2, borderStyle:"solid"}} value={age} onChangeText={setAge}/>
        </View>
        <Button title='Pencet' onPress={pencet}/>

        <Text style={{marginVertical:'3%'}}>{nilai}</Text>
    </View>
  )
}

export default Challenge2