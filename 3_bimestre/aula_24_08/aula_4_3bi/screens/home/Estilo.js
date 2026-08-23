import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },

  operacoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  botao: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    minWidth: 50,
    alignItems: 'center',
  },

  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  operacaoSelecionada: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },

  botaoCalcular: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
  },

  textoCalcular: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  resultado: {
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default styles;