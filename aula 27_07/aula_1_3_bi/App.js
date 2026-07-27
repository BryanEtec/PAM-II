import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Image} from 'react-native';

export default function App() {
  return (
    <ScrollView>

      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
      />

      <Text>Open Digite o E-mail</Text>

      <TextInput defaultValue="fulano@hotmail.com"></TextInput>

      <Text>Senha</Text>

      <TextInput defaultValue="abc@123"></TextInput>

      <Button
        onPress={() => {}}
        title={'Login'}
      />

    </ScrollView>
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
