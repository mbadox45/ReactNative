import { View, ScrollView, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Appbar, Text, TextInput, RadioButton, Checkbox, Snackbar } from 'react-native-paper'
import { SelectList } from 'react-native-dropdown-select-list'

// DB SQLite
import { saveSiswa, updateSiswa } from '../../backend/SiswaDatabase'

// Components
import FormLabel from '../components/FormLabel'

// Context dari Siswa Context
import { SiswaContext } from '../../SiswaContext'

const TambahScreen = ({navigation, route}) => {

    // Validasi menggunakan SnackBar
    const [visible, setVisible] = useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    // Variable UseState
    const [status, setStatus] = useState("")
    const [id, setId] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("pria")
    const [phoneNum, setPhoneNum] = useState("")
    const [jenjang, setJenjang] = useState("")
    const [alamat, setAlamat] = useState("")
    const [membaca, setMembaca] = useState(false)
    const [menulis, setMenulis] = useState(false)
    const [menggambar, setMenggambar] = useState(false)
    const [context, setContext] = useContext(SiswaContext)

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

    // Params Value from DetailScreen
    const rute = route.params;

    // Aksi SQLite
    const handleAddSiswa = () => {
        if (!firstName || !lastName || !phoneNum || !gender || !jenjang || !hobby || !alamat) {
            onToggleSnackBar();
        } else {
            saveSiswa(firstName, lastName, phoneNum, gender, jenjang, hobby, alamat, (id) => { console.log("Item ditambahkan dengan id :" + id)});
            console.log(firstName, lastName, phoneNum, gender, jenjang, hobby, alamat)
            setContext(context+1);
            navigation.navigate("Home");
        }
    }
    const handleUpdateSiswa = () => {
        updateSiswa(firstName, lastName, phoneNum, gender, jenjang, hobby, alamat, id);
        console.log(firstName, lastName, phoneNum, gender, jenjang, hobby, alamat)
        setContext(context+1);
        navigation.navigate("Home");
    }

    let newJenjang;

    const loadDataSiswa = () => {
        if (rute.status === 'edit') {
            setId(rute.id);
            setFirstName(rute.first_name);
            setLastName(rute.last_name);
            setGender(rute.gender);
            setJenjang(rute.jenjang);
            setAlamat(rute.alamat);
            setPhoneNum(rute.phone.toString());
            setStatus(rute.status);
            const hobi = JSON.parse(rute.hobi);
            setMembaca(hobi.membaca);
            setMenulis(hobi.menulis);
            setMenggambar(hobi.menggambar);
            newJenjang = data_jenjang.find((obj) => obj.value == jenjang)
        } else {
            setId("");
            setFirstName("");
            setLastName("");
            setGender("");
            setJenjang("");
            setAlamat("");
            setPhoneNum("");
            setStatus("");
            setMembaca(false);
            setMenulis(false);
            setMenggambar(false);
        }
    }

    useEffect(() => {
        loadDataSiswa();
    },[])

    return (
        <SafeAreaProvider>
            <ScrollView>
                <View style={{flex:1}}>
                    <Appbar.Header style={{backgroundColor: '#CA6F1E'}}>
                        <Appbar.BackAction color='white' onPress={() => {navigation.goBack()}} />
                        <Appbar.Content title={rute.status === 'add' ? "Tambah Siswa" : "Edit Siswa"} titleStyle={{color: 'white'}} />
                        <Appbar.Action color='white' icon="content-save" onPress={rute.status === 'add' ? handleAddSiswa : handleUpdateSiswa} />
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
                                setSelected={(val) => {setJenjang(val); console.log(val)}} 
                                data={data_jenjang} 
                                defaultOption={rute.status === 'edit' ? newJenjang : {key:'1',value:'TK'}}
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
                        <View>
                            <TextInput style={{marginTop:10}} multiline={true} numberOfLines={4} mode='outlined' label={'Alamat'} value={alamat} onChangeText={setAlamat}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View >
                <Snackbar
                    visible={visible}
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Undo',
                        onPress: () => {
                            // Do something
                        },
                    }}
                    style={{}}>
                    Maaf, Sata Wajib di Isi
                </Snackbar>
            </View>
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