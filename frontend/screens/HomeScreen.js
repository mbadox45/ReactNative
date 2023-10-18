import { View, FlatList } from 'react-native'
import React, {useState,useEffect} from 'react'
import { randomData } from '../random'
import { Button, Appbar } from 'react-native-paper'
import Item from '../components/Item'
import { SafeAreaProvider } from 'react-native-safe-area-context'


import { setupDatabase, getSiswa } from '../../backend/SiswaDatabase'

const HomeScreen = ({navigation}) => {
    const [data, setData]= useState([]);
    // randomData(30,data);

    useEffect(() => {
        setupDatabase()
        getSiswa(setData)
    },[])

  return (
    <SafeAreaProvider>
        <View style={{flex: 1}}>
            <View>
                <Appbar.Header style={{backgroundColor: '#CA6F1E'}}>
                    <Appbar.Content title="Sekolahku" titleStyle={{color: 'white'}} />
                </Appbar.Header>
            </View>
            <View style={{ flex: 1,  }}>
                <FlatList data={data} renderItem={({item}) => <Item navigation={navigation} gender={item.gender} jenjang={item.jenjang} name={item.first_name+' '+item.last_name} phone={item.phone_num} alamat={item.alamat} hobi={item.hobi} key={item.name} />} keyExtractor={item => item.id} style={{height: '70%'}} />
                {/* {data.map((item) => (
                        <Item gender={item.gender} jenjang={item.jenjang} name={item.name} phone={item.phone} key={item.id} />
                ))} */}
            </View>
            <Button icon='plus-thick' mode='contained' style={{position:'absolute', zIndex:10, bottom:'5%', right:'5%', width:150, backgroundColor:'#2980B9'}} onPress={() => {navigation.navigate('Tambah')}}>Tambah Siswa</Button>
        </View>
    </SafeAreaProvider> 
    
  )
}

export default HomeScreen