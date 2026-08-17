import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

import styles from './Estilo';

export default function Login({ navigation }) {

  return (

    <View style={styles.container}>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>Login</Text>

      <Text style={styles.label}>Digite o e-mail</Text>

      <TextInput
        nativeID="email"
        placeholder="fulano@hotmail.com"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>

      <TextInput
        placeholder="Digite sua senha"
        style={styles.input}
        secureTextEntry={true}
      />

      <View style={styles.botao}>
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Home')}
          color="#007AFF"
        />
      </View>

    </View>

  );
}