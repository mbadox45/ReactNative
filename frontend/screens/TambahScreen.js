import { View, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Appbar, Text, TextInput, RadioButton, Checkbox } from 'react-native-paper'
import { SelectList } from 'react-native-dropdown-select-list'

// DB SQLite
import { saveSiswa } from '../../backend/SiswaDatabase'

// Components
import FormLabel from '../components/FormLabel'

const TambahScreen = ({navigation}) => {

    // Variable UseState
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("pria")
    const [phoneNum, setPhoneNum] = useState("")
    const [jenjang, setJenjang] = useState("")
    const [alamat, setAlamat] = useState("")
    const [membaca, setMembaca] = useState(false)
    const [menulis, setMenulis] = useState(false)
    const [menggambar, setMenggambar] = useState(false)

    // Variable Array
    const hobby = {
        membaca,
        menulis,
        menggambar
    }
    const data_jenjang = [
        {key:'1', value:'TK'},
        {key:'2', value:'SD'},
        {key:'3', value:'SMP'},
        {key:'4', value:'SMA'},
    ]

    // Aksi SQLite
    const handleAddSiswa = () => {
        saveSiswa(firstName, lastName, phoneNum, gender, jenjang, hobby, alamat, (id) => { console.log("Item ditambahkan dengan id :" + id)});
        navigation.goBack();
    }



    return (
        <SafeAreaProvider>
            <ScrollView>
                <View style={{flex:1}}>
                    <Appbar.Header style={{backgroundColor: '#CA6F1E'}}>
                        <Appbar.BackAction color='white' onPress={() => {navigation.goBack()}} />
                        <Appbar.Content title="Tambah Siswa" titleStyle={{color: 'white'}} />
                        <Appbar.Action color='white' icon="content-save" onPress={handleAddSiswa} />
                    </Appbar.Header>
                    <View style={styles.body_form}>
                        <View style={styles.body_form_nama}>
                            <TextInput style={styles.text_input_nama} label={'Nama Depan'} mode='outlined' value={firstName} onChangeText={setFirstName} />
                            <TextInput style={styles.text_input_nama} label={'Nama Belakang'} mode='outlined' value={lastName} onChangeText={setLastName} />
                        </View>
                        <TextInput style={styles.text_input_phone} label={'No Hp'} mode='outlined' keyboardType='phone-pad' value={phoneNum} onChangeText={setPhoneNum} />
                        <FormLabel text={'Gender'}/>
                        <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                            <View style={styles.body_form_gender}>
                                <View style={styles.radio_input_gender}>
                                    <RadioButton value="pria" />
                                    <Text>Pria</Text>
                                </View>
                                <View  style={styles.radio_input_gender}>
                                    <RadioButton value="wanita" />
                                    <Text>Wanita</Text>
                                </View>
                            </View>
                        </RadioButton.Group>
                        <FormLabel text={'Jenjang'}/>
                        <View style={styles.dropdown_jenjang}>
                            <SelectList 
                                setSelected={(val) => setJenjang(val)} 
                                data={data_jenjang} 
                                save="value"
                                placeholder='Pilih Jenjang'
                            />
                        </View>
                        <FormLabel text={'Hobby'}/>
                        <View style={styles.check_hobby}>
                            <Checkbox.Item label="Membaca" status={membaca ? 'checked' : 'unchecked'} onPress={() => {setMembaca(!membaca)}}/>
                            <Checkbox.Item label="Menulis" status={menulis ? 'checked' : 'unchecked'} onPress={() => {setMenulis(!menulis)}}/>
                            <Checkbox.Item label="Menggambar" status={menggambar ? 'checked' : 'unchecked'} onPress={() => {setMenggambar(!menggambar)}}/>
                        </View>
                        <TextInput style={{marginTop:10}} multiline={true} numberOfLines={4} mode='outlined' label={'Alamat'} value={alamat} onChangeText={setAlamat}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    body_form: {
        paddingHorizontal: 10,
    },
    body_form_nama:{
        flexDirection:'row',
        justifyContent:'center',
        gap: 10,
        marginTop: 10
    },
    body_form_gender:{
        flexDirection:'row',
        gap: 10,
        marginVertical: 10
    },
    text_input_nama: {
        width:'48%'
    },
    text_input_phone: {
        marginVertical: 10
    },
    radio_input_gender: {
        flexDirection:'row',
        alignItems:'center'
    },
    dropdown_jenjang: {
        marginVertical:10
    },
    check_hobby: {
        marginBottom:10
    },
})

export default TambahScreen