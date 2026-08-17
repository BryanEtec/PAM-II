// services/auth.js
import { Alert } from "react-native";

export function validarSenha(senha) {
  // Pelo menos 6 caracteres
  if (senha.length < 6) {
    return {
      valido: false,
      mensagem: 'A senha deve ter pelo menos 6 caracteres.',
    };
  }

  // Pelo menos uma letra maiúscula
  if (!/[A-Z]/.test(senha)) {
    return {
      valido: false,
      mensagem: 'A senha deve conter pelo menos uma letra maiúscula.',
    };
  }

  // Pelo menos um caractere especial
  if (!/[!@#$%^&*(),.?":{}|<>_\-+=/\\[\]';`~]/.test(senha)) {
    return {
      valido: false,
      mensagem: 'A senha deve conter pelo menos um caractere especial.',
    };
  }

  return {
    valido: true,
    mensagem: '',
  };
}

export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

export async function fazerLogin(email, senha) {
  // Validação do e-mail
  if (!validarEmail(email)) {
    Alert.alert('Erro', 'Digite um e-mail válido.');
    console.log('Digite um e-mail válido.');
    return {
      sucesso: false,      
      mensagem: 'Digite um e-mail válido.',
    };
  }

  // Validação da senha
  const resultadoSenha = validarSenha(senha);

  if (!resultadoSenha.valido) {
    Alert.alert('Erro', resultadoSenha.mensagem);
    console.log('Digite uma senha válida.');
    return {
      sucesso: false,
      mensagem: resultadoSenha.mensagem,
    };
  }

  Alert.alert('Sucesso', 'Login realizado com sucesso!');
  console.log('Tudo certo');
  navigation.navigate('Home');

  return {
    sucesso: true,
    mensagem: 'Login realizado com sucesso!',
  };
}
