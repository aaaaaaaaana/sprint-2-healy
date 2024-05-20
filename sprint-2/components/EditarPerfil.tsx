


import React, { useState, createContext, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';


import ResultadoExame from './ResultadoExame';
import Header from './Header'
import Footer from './Footer'



export const ImageContext = createContext(null);
export const PacienteContext = createContext(null);



const EditarPerfilScreen: React.FC = () => {
  const navigation = useNavigation(); 
  const [selectedImage, setSelectedImage] = useState(null);
  const [novoNome, setNovoNome] = useState('');
  const setPacienteNome = useContext(PacienteContext); 


  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,

    });


    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }

  };




   const handleSalvar = () => {
    try {
      // Salve o novo nome na API ou no AsyncStorage
      // ... 

      // Atualize o contexto com o novo nome
      setPacienteNome(novoNome); // Use a função para atualizar o contexto
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar o novo nome:', error);
      // ...
    }
  };



  

  return (


    <View style={style.container}>

      <Header navigation={navigation} />


      <View style={style.contentContainer}>

        <Text style={style.titulo}>Editar Perfil</Text>

        <TouchableOpacity onPress={pickImage} style={style.perfilImagem}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={style.perfilImagem} />

          ) : (
            <View style={{ backgroundColor: 'lightgray', width: 100, height: 100, borderRadius: 50 }} />
          )}


        </TouchableOpacity>


        <TextInput
          style={style.input}
          value={novoNome}
          onChangeText={setNovoNome}
          placeholder="Novo Nome"
        />


        <TouchableOpacity onPress={handleSalvar} style={style.botao}>
          <Text style={style.botaoTxt}>Salvar</Text>

        </TouchableOpacity>


      </View>


      <Footer />


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


  titulo: {
    color: '#272727', 
    fontSize: 24,
    marginBottom: 25,
    textAlign: 'center',
    fontFamily: 'Clarendon',
  },


  perfilImagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
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



export default EditarPerfilScreen;

export { ResultadoExame }; 


