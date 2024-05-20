

import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, Dimensions}  from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Header from './Header';
import Footer from './Footer';


const CadastroScreen = ({ navigation }) => {
  const [selectedType, setSelectedType] = useState('paciente');

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  const [crmOuCre, setCrmOuCre] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

async function save(nome:string, email:string, nascimento:string, tipo:string, cpf:string) {
  let url = `http://localhost/pessoa`;

  let headers = {
    'Content-Type': 'application/json',
  };

  let body = {
    nome,
    email,
    nascimento,
    tipo,
    cpf,
  };

  let response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  });
  console.log(response.status);
}


async function findAll(nome:string, email:string, nascimento:string, silga:string) {
    let url = `http://localhost/pessoa&nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&nascimento=${encodeURIComponent(nascimento)}&silga=${encodeURIComponent(silga)}`;

    let response = await fetch(url, {
        method: 'GET',
    });

    let resposta: Array<object> = response

    return(response)
}


async function saveuser(user:string, senha:string, pessoa:BigInteger) {
    let url = `http://localhost/usuario`;

    let headers = {
        'Content-Type': 'application/json',
    };

    let body = {
        user,
        senha,
        pessoa,
    };

    let response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
    });
    console.log(response.status)
}

  useEffect(() => {
    if (data.length == 2) {
      setData(data + '/');
    }
    if (data.length == 5) {
      setData(data + '/');
    }
  }, [data]);

  const handleCadastro = async () => {
    if (
      nomeCompleto.trim() === '' ||
      email.trim() === '' ||
      cpf.trim() === '' ||
      senha.trim() === ''
    ) {
      alert('Por favor, preencha todas as informações.');
      setNomeCompleto('');
      setEmail('');
      setCrmOuCre('');
      setCpf('');
      setSenha('');

      return;
    } else if (selectedType === 'profissional' && crmOuCre.trim() === '') {
      alert('Por favor, preencha o documento corretamente.');
      setNomeCompleto('');
      setEmail('');
      setCrmOuCre('');
      setCpf('');
      setSenha('');

      return;
    } else {




      try {
        var tipo = '';
        if(selectedType.trim() === 'paciente'){
          tipo = 'PC';
        } else{
          tipo = 'PF';
        }

        save(nomeCompleto,email,data,tipo,cpf)
        let resposta = findAll(nomeCompleto,email,data,tipo)
        var pessoa = resposta[0]['id']
        saveuser(email,senha,pessoa)
        
        

        // Implementar lógica de cadastro (ex: enviar dados para API)
        console.log('Dados de cadastro:', {
          nomeCompleto,
          email,
          crmOuCre,
          cpf,
          senha,
          selectedType,
        });

        // Navegar para a tela de Login
        navigation.navigate('Login');
      } catch (error) {
        console.error('Erro ao cadastrar:', error);
        alert('Erro ao cadastrar. Tente novamente.');
      }
    }
  };

  return (

    <View style={style.container}>
      <Header navigation={navigation} />

      <ScrollView
        style={style.scrollView}
        contentContainerStyle={style.contentContainerScroll}>


        <View style={style.contentContainer}>

          <View style={style.formularioContainer}>

            <Text style={style.titulo}>Cadastro</Text>

            <View style={style.tipoSelecionar}>

              <TouchableOpacity
                style={[
                  style.tipoBotao,
                  selectedType === 'paciente' && style.tipoSelecionado,
                ]}
                onPress={() => setSelectedType('paciente')}>

                <Text style={style.tipoBotaoTxt}>Paciente</Text>

              </TouchableOpacity>



              <TouchableOpacity
                style={[
                  style.tipoBotao,
                  selectedType === 'profissional' && style.tipoSelecionado,
                ]}
                onPress={() => setSelectedType('profissional')}>
                <Text style={style.tipoBotaoTxt}>Profissional</Text>

              </TouchableOpacity>

            </View>




            <View style={style.inputContainer}>
              <Text style={style.rotulo}>Digite seu nome completo:</Text>

              <TextInput
                style={style.input}
                placeholder="Digite seu nome completo:"
                value={nomeCompleto}
                onChangeText={setNomeCompleto}
              />

            </View>



            <View style={style.inputContainer}>
              <Text style={style.rotulo}>Digite seu E-mail:</Text>

              <TextInput
                style={style.input}
                placeholder="Digite seu E-mail:"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />

            </View>



            <View style={style.inputContainer}>
              <Text style={style.rotulo}>Digite sua data de nascimento:</Text>

              <TextInput
                style={style.input}
                placeholder="Digite sua data de nascimento:"
                value={data}
                onChangeText={setData}
                maxLength={10}
                keyboardType="number-pad"
              />
              
            </View>



            {selectedType === 'profissional' && (
              <View style={style.inputContainer}>
                <Text style={style.rotulo}>
                  Digite seu documento profissional:
                </Text>


                <TextInput
                  style={style.input}
                  placeholder="Digite seu documento profissional:"
                  value={crmOuCre}
                  onChangeText={setCrmOuCre}
                />

              </View>

            )}



            <View style={style.inputContainer}>
              <Text style={style.rotulo}>Digite seu CPF:</Text>

              <TextInput
                style={style.input}
                placeholder="Digite seu CPF:"
                value={cpf}
                maxLength={11}
                onChangeText={setCpf}
              />
            </View>



            <View style={style.inputContainer}>
              <Text style={style.rotulo}>Crie uma senha:</Text>

              <TextInput
                style={[style.input, { position: 'relative' }]}
                placeholder="Crie uma senha:"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={!showPassword}
              />



              <TouchableOpacity
                style={style.iconSenha}
                onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={24}
                  color="#DAB9E3"
                />
              </TouchableOpacity>
            </View>



            <TouchableOpacity style={style.botao} onPress={handleCadastro}>
              <Text style={style.botaoTxt}>Cadastrar</Text>
            </TouchableOpacity>

            <View style={style.loginContainer}>
            
              <Text style={style.loginTxt}>
                Já possui login?

                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={style.loginTxt}>
                  <Text style={style.loginLink}> Clique aqui para logar</Text>
                </TouchableOpacity>


              </Text>


            </View>


          </View>

        </View>


        <Footer />



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



  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },



  loginTxt: {
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'Clarendon',
    color: '#FBF9F7',
  },



  loginLink: {
    textAlign: 'center',
    color: '#DAB9E3',
    textDecorationLine: 'underline',
    fontFamily: 'Clarendon',
  },



  tipoSelecionar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '100%',
  },



  tipoBotao: {
    backgroundColor: '#DAB9E3',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 15,
  },



  tipoSelecionado: {
    backgroundColor: '#6EB8BA',
  },



  tipoBotaoTxt: {
    color: '#FBF9F7',
    fontFamily: 'Georgia',
  },



  iconSenha: {
    position: 'absolute',
    right: '5%',
    top: '55%',
    transform: [{ translateY: -12 }],
  },


});


export default CadastroScreen;


