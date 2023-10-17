import { View, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { randomData } from '../random'
import { PaperProvider, Button, Avatar, Searchbar, Divider, Text, Appbar } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

// Image
import PriaPicture from '../../assets/images/pria.png'

// Components
import Item from '../components/Item'

const HomeScreen = () => {
    const [data, setData] = useState([])

    return (
        <PaperProvider>
            <View style={{marginTop:'5%'}}>
                <Appbar.Header style={{backgroundColor:'green', padding:15}}>
                    <Appbar.Content title="Sekolah Ku" titleStyle={{color:'white'}} />
                </Appbar.Header>
            </View>
            <View>
                <Item gender={'prima'} name={'Joko'} jenjang={'SMA'} phone={'080808'}/>
            </View>
        </PaperProvider>
    )
}

export default HomeScreen