import { View } from 'react-native'
import { Appbar, List, Avatar } from 'react-native-paper'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'


const DetailScreen = ({navigation, route}) => {

    const rute = route.params
    return (
        <SafeAreaProvider style={{backgroundColor:'#F2F4F4'}}>
            <View style={{flex: 1}}>
                <Appbar.Header style={{backgroundColor: '#CA6F1E'}}>
                    <Appbar.BackAction color='white' onPress={() => {navigation.goBack()}} />
                    <Appbar.Content title={rute.name} titleStyle={{color: 'white'}} />
                    <Appbar.Action color='white' icon="pencil" onPress={() => {}} />
                    <Appbar.Action color='white' icon="trash-can" onPress={() => {}} />
                </Appbar.Header>
                <View style={{alignItems:'center', marginVertical:'5%'}}>
                    <Avatar.Image size={180} source={require('../../assets/images/pria.png')} />
                </View>
                <View style={{ flex: 1, width:'100%'}}>
                    <List.Section style={{paddingHorizontal:'5%'}}>
                        <List.Item title={rute.name} left={() => <List.Icon icon="account" />} />
                        <List.Item title={rute.gender} left={() => <List.Icon icon="gender-male-female" />} />
                        <List.Item title={rute.phone} left={() => <List.Icon icon="phone" />} />
                        <List.Item title={rute.jenjang} left={() => <List.Icon icon="stairs" />} />
                        <List.Item title={rute.alamat} left={() => <List.Icon icon="home" />} />
                        <List.Item title={rute.hobi} left={() => <List.Icon icon="handball" />} />
                    </List.Section>
                </View>
            </View>
        </SafeAreaProvider>
    )
}

export default DetailScreen