import { View, Text } from 'react-native'
import React from 'react'

const Cobas = () => {

    let age = 17
    if (age < 18) {
        console.log('you are kids');
    }
    return (
        <View>
            <Text>Coba</Text>
        </View>
    )
}

export default Cobas