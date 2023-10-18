// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, SafeAreaView, StatusBar  } from 'react-native';
import { PaperProvider, Appbar } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Components
import Cobas from './src/Cobas';
import Challenge2 from './src/Challenge2';

// Screens
import HomeScreen from './frontend/screens/HomeScreen';
import DetailScreen from './frontend/screens/DetailScreen';
import TambahScreen from './frontend/screens/TambahScreen';

// // Day 1

// const FormLabel = () => {

//     const [name, setName] = useState('')
//     const [age, setAge] = useState('')

//     const TextLabel = ({tulisan}) => {
//         return (
//           <Text style={{fontSize:17, color:'#8E44AD', fontWeight:'bold'}}>{tulisan}</Text>
//         )
//     }
//     return (
//         <View>
//             <View style={{}}>
//                 <TextLabel tulisan='Name'/>
//                 <TextInput style={{borderBottomColor:'#8E44AD', paddingHorizontal:'2%', paddingVertical:'2%', borderBottomWidth:2, borderStyle:"solid"}} value={name} onChangeText={setName}/>
//             </View>
//             <View style={{marginVertical:'5%'}}>
//                 <TextLabel tulisan='Age'/>
//                 <TextInput style={{borderBottomColor:'#8E44AD', paddingHorizontal:'2%', paddingVertical:'2%', borderBottomWidth:2, borderStyle:"solid"}} value={age} onChangeText={setAge}/>
//             </View>
//             <Button title='Pencet'/>
//         </View>
//     )
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Challenge2/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// ===================DAY 2=======================

// Day 2
// // HomeScreen
// export default function App() {
//   return (
//     <SafeAreaProvider style={styles.container}>
//       <HomeScreen/>
//     </SafeAreaProvider>
//   );
// }

// DetailScreen
// export default function App() {
//   return (
//     <SafeAreaProvider style={styles.container}>
//       <DetailScreen/>
//     </SafeAreaProvider>
//   );
// }

// With nNavigation
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="Tambah" component={TambahScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});