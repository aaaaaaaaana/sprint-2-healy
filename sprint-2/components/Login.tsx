


import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';



import PerfilPaciente from './PerfilPaciente'; 
import PerfilProfissional from './PerfilProfissional';
import RedefinirSenha from './RedefinirSenha';
import Header from './Header'
import Footer from './Footer'



const Login: React.FC = ( ) => {
  const navigation = useNavigation();

  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);



  const users = {
    'usuario1': { perfil: 'paciente' },
    'usuario2': { perfil: 'profissional' },
  };

  const handleLogin = async () => {


    try {
      
      const user = users[nomeUsuario.toLowerCase()]; 

      if (user && senha === '123456') { 
        
        if (user.perfil === 'paciente') {
          navigation.navigate('PerfilPaciente');

        } else if (user.perfil === 'profissional') {
          navigation.navigate('PerfilProfissional');


        } else {
          Alert.alert('Erro', 'Perfil inválido');
        }

      } else {
        Alert.alert('Erro', 'Credenciais inválidas');

      }

    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login');

    }

  };


  const handleEsqueceuSenha = () => {
    navigation.navigate('RedefinirSenha');
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
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

            <Text style={style.titulo}>Login</Text>

            <View style={style.inputContainer}>


              <Text style={style.rotulo}>Digite seu nome de usuário:</Text>


              <TextInput
                style={style.input}
                value={nomeUsuario}
                onChangeText={setNomeUsuario}
                placeholder="Nome de Usuário"
              />


            </View>

            <View style={style.inputContainer}>

              <Text style={style.rotulo}>Digite sua senha:</Text>


              <View style={style.senhaContainer}>
                <TextInput
                  style={style.input}
                  value={senha}
                  onChangeText={setSenha}
                  placeholder="Senha"
                  secureTextEntry={!mostrarSenha}
                />

                <TouchableOpacity
                  style={style.icon}
                  onPress={() => setMostrarSenha(!mostrarSenha)}
                >

                  <Ionicons
                    name={mostrarSenha ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="#DAB9E3"
                  />

                </TouchableOpacity>

              </View>

            </View>



            
            <TouchableOpacity style={style.botao} onPress={handleLogin}>
              <Text style={style.botaoTxt}>Entrar</Text>

            </TouchableOpacity>



           <View style={style.cadastroContainer}>
           
              <Text style={style.cadastroTxt}>
                Já possui cadastro? 


                <TouchableOpacity 
                  onPress={() => navigation.navigate('Cadastro')} 
                  style={style.cadastroLink}
                >

                  <Text style={style.cadastroLink}> Clique aqui para cadastrar</Text>

                </TouchableOpacity>

              </Text>

            </View>



            <TouchableOpacity
              style={style.esqueceuSenha}
              onPress={() => navigation.navigate('RedefinirSenha')}
            >

              <Text style={style.esqueceuSenhaTxt}>Esqueceu sua senha?</Text>

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


  esqueceuSenha: {
    marginTop: 10,
    alignItems: 'center',
  },


  esqueceuSenhaTxt: {
    color: '#FBF9F7', 
    fontFamily: 'Clarendon',
  },


  senhaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  icon: {
    marginLeft: '-12%',
    bottom: '2%',
  },



  cadastroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },



  cadastroTxt: {
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'Clarendon',
    color: '#FBF9F7',
  },



  cadastroLink: {
    textAlign: 'center',
    color: '#DAB9E3',
    textDecorationLine: 'underline',
    fontFamily: 'Clarendon',
    top: '-3%'
  },



});



export default Login;




