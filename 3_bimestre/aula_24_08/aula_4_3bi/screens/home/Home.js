import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import styles from './Estilo';
import { realizarCalculo } from './Funcoe';

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacao, setOperacao] = useState('+');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Calculadora
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />

      <View style={styles.operacoes}>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setOperacao('+')}
        >
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setOperacao('-')}
        >
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setOperacao('*')}
        >
          <Text style={styles.textoBotao}>×</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => setOperacao('/')}
        >
          <Text style={styles.textoBotao}>÷</Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.operacaoSelecionada}>
        Operação: {operacao}
      </Text>

      <TouchableOpacity
        style={styles.botaoCalcular}
        onPress={() =>
          realizarCalculo(
            numero1,
            numero2,
            operacao,
            setResultado
          )
        }
      >
        <Text style={styles.textoCalcular}>
          Calcular
        </Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>
        Resultado: {resultado}
      </Text>

    </View>
  );
}