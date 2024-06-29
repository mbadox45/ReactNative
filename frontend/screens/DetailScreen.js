import { View } from 'react-native'
import React, { useContext } from 'react'
import { Appbar, List, Avatar } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// Context dari Siswa Context
import { SiswaContext } from '../../SiswaContext'

// SQLite DB
import { deleteSiswa } from '../../backend/SiswaDatabase'

// Images
import PriaPicture from "../../assets/images/pria.png"
import WanitaPicture from "../../assets/images/wanita.png"


const DetailScreen = ({navigation, route}) => {
    
    const [context, setContext] = useContext(SiswaContext)
    const rute = route.params

    const hobbies = [];
    const hobby = () => {
        const hobi = JSON.parse(rute.hobi);
        for(const key in hobi){
            if (hobi[key] == true) {
                hobbies.push(key)
            }
        }
    }

    hobby()

    const hapusSiswa = () => {
        deleteSiswa(rute.id);
        setContext(context+1);
        navigation.goBack()
    }

    return (
        <SafeAreaProvider style={{backgroundColor:'#F2F4F4'}}>
            <View style={{flex: 1}}>
                <Appbar.Header style={{backgroundColor: '#CA6F1E'}}>
                    <Appbar.BackAction color='white' onPress={() => {navigation.goBack()}} />
                    <Appbar.Content title={`${rute.first_name} ${rute.last_name}`} titleStyle={{color: 'white'}} />
                    <Appbar.Action color='white' icon="pencil" onPress={() => {navigation.navigate('Form',{id:rute.id,first_name:rute.first_name,last_name:rute.last_name,jenjang:rute.jenjang,gender:rute.gender,phone:rute.phone,alamat:rute.alamat,hobi:rute.hobi,status:'edit'})}} />
                    <Appbar.Action color='white' icon="trash-can" onPress={hapusSiswa} />
                </Appbar.Header>
                <View style={{alignItems:'center', marginVertical:'5%'}}>
                    <Avatar.Image size={180} source={rute.gender == "pria" ? PriaPicture : WanitaPicture} />
                </View>
                <View style={{ flex: 1, width:'100%'}}>
                    <List.Section style={{paddingHorizontal:'5%'}}>
                        <List.Item title={`${rute.first_name} ${rute.last_name}`} left={() => <List.Icon icon="account" />} />
                        <List.Item title={rute.gender} left={() => <List.Icon icon="gender-male-female" />} />
                        <List.Item title={rute.phone} left={() => <List.Icon icon="phone" />} />
                        <List.Item title={rute.jenjang} left={() => <List.Icon icon="stairs" />} />
                        <List.Item title={rute.alamat} left={() => <List.Icon icon="home" />} />
                        <List.Item title={`${hobbies.toString().charAt(0).toUpperCase()}${hobbies.toString().slice(1)}`} left={() => <List.Icon icon="handball" />} />
                    </List.Section>
                </View>
            </View>
        </SafeAreaProvider>
    )
}

export default DetailScreen