import { View, FlatList } from 'react-native'
import React, {useState,useEffect, useContext} from 'react'
import { randomData } from '../random'
import { Button, Appbar, Searchbar  } from 'react-native-paper'
import Item from '../components/Item'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SiswaContext } from '../../SiswaContext'

// SQLite Data
import { getSiswaByName, getSiswa, setupDatabase } from '../../backend/SiswaDatabase'
import axios from 'axios'

const HomeScreen = ({navigation}) => {

    // Search Variable
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    // Context
    const [context, setContext] = useContext(SiswaContext)

    // Variables
    const [data, setData]= useState([]);
    // randomData(30,data);

    // // Using API with Axios
    // const fetchData = async() => {
    //     const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //     console.log(result.data);
    // }

    // Proses Rendering Data
    useEffect(() => {
        setupDatabase();
        if (context > 2) {
            setData([])
            getSiswa(setData)
        } else {
            getSiswa(setData)
        }
        // fetchData();
    },[context])
    // console.log(data)

  return ( 
    <SafeAreaProvider>
        <View style={{flex: 1}}>
            <View>
                <Appbar.Header style={{backgroundColor: '#CA6F1E'}}> 
                    <Appbar.Content title="Sekolahku" titleStyle={{color: 'white'}} />
                    <Appbar.Action color='white' icon="logout" onPress={()=>{navigation.navigate("Login")}} />
                </Appbar.Header> 
            </View> 
            <View>
            <Searchbar
                placeholder="Search"
                onSubmitEditing={({nativeEvent: {text}}) => {getSiswaByName(text, setData);}}
                />
            </View>
            <View style={{ flex: 1,  }}>
                <FlatList data={data} renderItem={({item}) => <Item id={item.id} navigation={navigation} gender={item.gender} jenjang={item.jenjang} first_name={item.first_name} last_name={item.last_name} phone={item.phone_num} alamat={item.alamat} hobi={item.hobi} key={item.name} />} keyExtractor={item => item.id} style={{height: '70%'}} />
                {/* {data.map((item) => (
                        <Item gender={item.gender} jenjang={item.jenjang} name={item.name} phone={item.phone} key={item.id} />
                ))} */}
            </View>
            <Button icon='plus-thick' mode='contained' style={{position:'absolute', zIndex:10, bottom:'5%', right:'5%', width:150, backgroundColor:'#2980B9'}} onPress={() => {navigation.navigate('Form',{status:'add'})}}>Tambah Siswa</Button>
        </View>
    </SafeAreaProvider> 
    
  )
}

export default HomeScreen