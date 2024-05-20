


import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';




import Header from './Header';
import Footer from './Footer';
import NovaSenha from './NovaSenha'; 



const RedefinirSenha: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');


  const handleRedefinirSenha = async () => {
    try {

      if (email.toLowerCase() === 'usuario1@example.com') { 
        Alert.alert('Sucesso', 'Email de redefinição de senha enviado!');
        navigation.navigate('NovaSenha');


      } else {
        Alert.alert('Erro', 'Email inválido.');

      }
      
    } catch (error) {

      console.error('Erro ao enviar email de redefinição:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao enviar o email.');

    }

  };



  return (
    
    <View style={style.container}>

      <Header navigation={navigation}/>

      <ScrollView
        style={style.scrollView}
        contentContainerStyle={style.contentContainerScroll}
      >


        <View style={style.contentContainer}>

          <View style={style.formularioContainer}>
            <Text style={style.titulo}>Redefinir Senha</Text>


            <View style={style.inputContainer}>
              <Text style={style.rotulo}>Digite seu email:</Text>

              <TextInput
                style={style.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
              />

            </View>



            <TouchableOpacity style={style.botao} onPress={handleRedefinirSenha}>
              <Text style={style.botaoTxt}>Redefinir Senha</Text>

            </TouchableOpacity>


          </View>


        </View>


        <Footer/>


      </ScrollView>


    </View>


  );

  
};





const { width, height } = Dimensions.get('window');



const style = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#FBF9F7', 
  },


  scrollView: {
    flex: 1,
    width: '100%',
  },


  contentContainerScroll: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '95%', 
    paddingTop: '20%', 
  },


  contentContainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },


  formularioContainer: {
    backgroundColor: '#048A8F',
    padding: 20,
    borderRadius: 10,
    width: width * 0.85,
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



export default RedefinirSenha;


