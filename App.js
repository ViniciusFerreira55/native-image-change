import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { FullWindowOverlay } from 'react-native-screens';



const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Seja bem-vindo! Realize o Login</Text>
      <TextInput placeholder="Login" style={{ height: 45, width: "95%", borderColor: "gray", borderWidth: 2, margin: 10, padding: 5 }}></TextInput>
      <TextInput placeholder="Password" style={{ height: 45, width: "95%", borderColor: "gray", borderWidth: 2, padding: 5, margin: 10 }}></TextInput>
      <TouchableOpacity style={{ height: 45, width: "30%", borderColor: "gray", borderWidth: 2, padding: 25, margin: 10, alignText: 'center' }} onPress={() => navigation.navigate('photos')}>Logar</TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
};

const Photos = ({ navigation }) => {
  const [foto, setFoto] = useState('');
  const [exibir, setExibir] = useState(false);

  return (
    <View style={styles.container}>
      {exibir? <Image source={{uri: foto}} style={{height: 100, width: 100}}/> : null }
      
      <TouchableOpacity onPress={() => {setFoto(`https://picsum.photos/id/${Math.floor(Math.random() * 20)}/200/300?`), setExibir(!exibir) }}>       
        <Image source={require('./assets/yujiro.png')} style={{height: 100, width: 100}}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 45, width: "30%", borderColor: "gray", borderWidth: 2, padding: 25, margin: 10, alignText: 'center' }} onPress={() => navigation.navigate('login')}>Voltar</TouchableOpacity>
    </View>
  )
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="photos" component={Photos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
