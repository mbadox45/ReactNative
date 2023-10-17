import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

// Components
import Cobas from './src/Cobas';
import Challenge2 from './src/Challenge2';
import HomeScreen from './frontend/screens/HomeScreen';



const FormLabel = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const TextLabel = ({tulisan}) => {
    return (
      <Text style={{fontSize:17, color:'#8E44AD', fontWeight:'bold'}}>{tulisan}</Text>
    )
  }
  return (
    <View>
      <View style={{}}>
        <TextLabel tulisan='Name'/>
        <TextInput style={{borderBottomColor:'#8E44AD', paddingHorizontal:'2%', paddingVertical:'2%', borderBottomWidth:2, borderStyle:"solid"}} value={name} onChangeText={setName}/>
      </View>
      <View style={{marginVertical:'5%'}}>
        <TextLabel tulisan='Age'/>
        <TextInput style={{borderBottomColor:'#8E44AD', paddingHorizontal:'2%', paddingVertical:'2%', borderBottomWidth:2, borderStyle:"solid"}} value={age} onChangeText={setAge}/>
      </View>
      <Button title='Pencet'/>
    </View>
  )
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Challenge2/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <View>
      <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: '8%',
  },
});
