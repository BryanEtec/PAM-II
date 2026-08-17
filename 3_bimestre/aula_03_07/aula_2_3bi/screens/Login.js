import { useState } from 'react';
import { Alert, View, Text, TextInput, Button, Image } from 'react-native';

import { fazerLogin } from '../function/Function';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleLogin() { 
    setCarregando(true);
    const resultado = await fazerLogin(email, senha);
    setCarregando(false); 
    
    if (!resultado.sucesso) { Alert.alert('Erro', resultado.mensagem); return; } 
    Alert.alert('Sucesso', resultado.mensagem, [ { text: 'OK', 
      onPress: () => navigation.navigate('Home'), }, ]); 
  }

  return (

    <View>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={{width: 200,height: 200
        }}/>

      <Text>Digite o e-mail</Text>

      <TextInput 
        nativeID='email' 
        placeholder="fulano@hotmail.com" 
        keyboardType="email-address" 
        autoCapitalize="none"
        autoComplete="email"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Senha</Text>

      <TextInput 
        nativeID='senha'
        secureTextEntry={true}
        placeholder="abc@123"
        value={senha} 
        onChangeText={setSenha}
      />

      <Button
        title="Entrar"
        // onPress={() => navigation.navigate('Home')}
        onPress={handleLogin} 
        disabled={carregando}
      />

    </View>

  );

}