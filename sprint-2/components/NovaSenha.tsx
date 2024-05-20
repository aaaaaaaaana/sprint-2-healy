


import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';



import Header from './Header'; 
import Footer from './Footer'; 




const NovaSenha: React.FC = () => {
  const navigation = useNavigation();
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');



  const handleCriarSenha = async () => {
    try {
      // Verificar se as senhas digitadas coincidem
      if (novaSenha !== confirmaSenha) {
        Alert.alert('Erro', 'As senhas não coincidem!');
        return;
      }



      // Chamada à API para salvar a nova senha
      const response = await fetch('sua-api-url/nova-senha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ novaSenha }), 
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Senha alterada com sucesso!');
        navigation.navigate('Login'); // Volte para a tela de login
      } else {
        Alert.alert('Erro', 'Erro ao alterar a senha.');
      }
    } catch (error) {
      console.error('Erro ao alterar a senha:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao alterar a senha.');
    }
  };



  return (
    <View style={style.container}>

      <Header navigation={navigation} /> 

      <ScrollView 
        style={style.scrollView}
        contentContainerStyle={style.scrollViewContent}>


        <View style={style.contentContainer}>

          <View style={style.formularioContainer}>

            <Text style={style.titulo}>Nova Senha</Text>



            <View style={style.inputContainer}>
              <Text style={style.rotulo}>Digite sua nova senha:</Text>

              <TextInput
                style={style.input}
                value={novaSenha}
                onChangeText={setNovaSenha}
                placeholder="Nova Senha"
                secureTextEntry={true}
              />

            </View>


            <View style={style.inputContainer}>
              <Text style={style.rotulo}>Confirme sua nova senha:</Text>

              <TextInput
                style={style.input}
                value={confirmaSenha}
                onChangeText={setConfirmaSenha}
                placeholder="Confirmar Senha"
                secureTextEntry={true}
              />

            </View>



            <TouchableOpacity style={style.botao} onPress={handleCriarSenha}>
              <Text style={style.botaoTxt}>Criar Senha</Text>

            </TouchableOpacity>


          </View>


        </View>

      </ScrollView>

      <Footer/> 


    </View>


  );
  
};




const style = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#FBF9F7', 
  },


  contentContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },


  scrollView: {
    flex: 1,
    width: '100%',
  },


  scrollViewContent: {
    flexGrow: 1, 
    padding: 30,
    paddingBottom: '95%', 
    paddingTop: '20%', 
  },


  formularioContainer: {
    backgroundColor: '#048A8F',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    marginVertical: 20,
  },


  titulo: {
    color: '#FBF9F7',
    fontSize: 24,
    marginBottom: 25,
    textAlign: 'center',
    fontFamily: 'Clarendon',
  },


  rotulo: {
    color: '#FBF9F7', 
    marginBottom: 5,
    fontFamily: 'Clarendon', 
  },


  inputContainer: {
    marginBottom: 15, 
  },


  input: {
    backgroundColor: '#FBF9F7',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    width: '100%',
  },


  botao: {
    backgroundColor: '#DAB9E3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },


  botaoTxt: {
    color: '#FBF9F7',
    fontWeight: 'bold',
    fontFamily: 'Georgia',
  },


  
});


export default NovaSenha;



