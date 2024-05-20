


import React, { useState, createContext, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



import ResultadoExame from './ResultadoExame';
import EditarPerfil from './EditarPerfil';
import Header from './Header'
import Footer from './Footer'


export const PacienteContext = createContext<string | null>(null);


const PacienteScreen: React.FC <{ imagem: string | null }> = ({ imagem }) => { 

  const [pacienteNome, setPacienteNome] = useState<string | null>(null); 
  const navigation = useNavigation();



  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


  };


  useEffect(() => {
      const loadPacienteNome = async () => {
        try {
          const storedName = await AsyncStorage.getItem('pacienteNome');
          if (storedName) {
            setPacienteNome(storedName);
          }
        } catch (error) {
          console.error('Erro ao carregar nome do paciente:', error);
        }
      };
      loadPacienteNome();
    }, []);




  return (


    <PacienteContext.Provider value={pacienteNome}>

      <View style={style.container}>


        <Header navigation={navigation}/>


        <ScrollView 
          style={style.scrollView}
          contentContainerStyle={style.contentContainerScroll}
        >

          <View style={style.perfil}>

            <View style={style.perfilImagem}>

              <View style={{ backgroundColor: 'lightgray', width: 100, height: 100, borderRadius: 50 }} />
              

            </View>



            <View>

              <Text style={style.perfilNome}>{pacienteNome}</Text>

              <Text style={style.perfilFuncao}>Plano que possui</Text>

            </View>

          </View>




          <View style={style.menu}>

            <View style={style.menuSeparador}/>


            <TouchableOpacity style={style.menuItem} onPress={() => navigation.navigate('EditarPerfil')}>
              <MaterialCommunityIcons name="pencil" size={24} color="#DAB9E3" />

              <Text style={style.menuItemTxt}>Editar Perfil</Text>
            </TouchableOpacity>


            <TouchableOpacity style={style.menuItem} onPress={() => navigation.navigate('Formulario')}>
              <MaterialCommunityIcons name="file-document" size={24} color="#DAB9E3" />

              <Text style={style.menuItemTxt}>Formulários</Text>
            </TouchableOpacity>



            <TouchableOpacity style={style.menuItem} onPress={() =>navigation.navigate('Predicao')}>
              <MaterialCommunityIcons name="flower-poppy" size={24} color="#DAB9E3" />

              <Text style={style.menuItemTxt}>Seu Plano</Text>
            </TouchableOpacity>


            <TouchableOpacity style={style.menuItem} onPress={() => navigation.navigate('ResultadoExame')}>
              <MaterialCommunityIcons name="clipboard-list" size={24} color="#DAB9E3" />
              
              <Text style={style.menuItemTxt}>Resultados de Exames</Text>
            </TouchableOpacity>


            <View style={style.menuSeparador}/>


          </View>



          <View style={style.uploadSecao}>

            <Text style={style.uploadTitulo}>Insira resultado de exames</Text>

            <TouchableOpacity onPress={pickImage} style={style.uploadContainer}>

                
                <Image source={{ uri: 'selectedImage' }} style={style.imagemSelecionada} />

                <View style={style.uploadPlaceholder}>

                  <MaterialCommunityIcons name="image-plus" size={48} color="#D9D9D9" />

                  <Text style={style.uploadPlaceholderTxt}>Browse or drop image</Text>
                </View>


            </TouchableOpacity>

          </View>

          <Footer/>

        </ScrollView>



      </View>

    </PacienteContext.Provider>

  );


};




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
    paddingBottom: '95%', 
    paddingTop: '20%', 
  },

  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FBF9F7',
  },


  perfilImagem: {
    marginRight: 16,
  },


  perfilNome: {
    fontSize: 18,
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color: '#272727',
    paddingBottom: '2%',
  },



  perfilFuncao: {
    fontSize: 14,
    fontFamily: 'Georgia',
    color: 'grey'
  },


  menu: {
    paddingHorizontal: 16,
    backgroundColor: '#FBF9F7',
  },


  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    paddingTop: '2%',
    paddingBottom: '2%',
    top: '5%',
    marginTop: '1%',
  },


  menuSeparador: {
    borderBottomWidth: 1,
    borderBottomColor: '#272727',
    paddingTop: '5%',
    paddingBottom: '8%',
  },




  menuItemTxt: {
    marginLeft: 20,
    fontSize: 16,
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color: '#272727',
    paddingTop: '2%',
    paddingBottom: '2%',
    marginTop: '2%'
  },


  uploadSecao: {
    padding: 16,
    backgroundColor: '#FBF9F7',
  },


  uploadPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%', 
  },


  uploadPlaceholderTxt: {
    color: '#D9D9D9',
    marginTop: 10,
  },


  uploadTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '10%',
  },


  uploadContainer: {
    borderWidth: 2,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    borderStyle: 'dashed',
    overflow: 'hidden',
  },


  imagemSelecionada: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },




});



export default PacienteScreen;

export { ResultadoExame, EditarPerfil }; 


