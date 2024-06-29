import { View, StyleSheet } from 'react-native'
import { TextInput, Avatar, Text, Button,Snackbar } from 'react-native-paper'
import React, { useState } from 'react'

import SekolahPicture from "../../assets/images/sekolah.png"

const LoginScreen = ({navigation}) => {
    // Validasi
    const [visible, setVisible] = useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    // Variable
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleSignIn = () => {
        if (!username || !password) {
            onToggleSnackBar()
            console.log('User & Password is undefined')
        } else {
            navigation.navigate("Home");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.div_image}>
                <Avatar.Image size={180} source={SekolahPicture} />
                <Text style={styles.text_image}>LOGIN REACT</Text>
            </View>
            <View style={styles.div_input}>
                <TextInput style={{}} mode='outlined' label={'Username'} value={username} onChangeText={setUsername}/>
                <TextInput style={{marginVertical:'10%'}} mode='outlined' label={'Password'} secureTextEntry={true} value={password} onChangeText={setPassword}/>
            </View>
            <View style={styles.div_button}>
                <Button icon="login" mode="contained" style={{paddingVertical:'2%', backgroundColor:'#E67E22'}} onPress={handleSignIn}>Sign In</Button>
            </View>
            <View style={{width:'100%', position:'absolute', bottom:0}}>
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
                    User & Password is undefined
                </Snackbar>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        marginTop: '10%',
        paddingHorizontal:10
    },
    div_image:{
        marginVertical:'10%',
        alignItems:'center',
    },
    text_image:{
        fontSize:30,
        marginTop:40,
        fontWeight:'200',
    },
    div_input:{
        width:'100%'
    },
    div_button:{
        width:'100%',
    }
});

export default LoginScreen