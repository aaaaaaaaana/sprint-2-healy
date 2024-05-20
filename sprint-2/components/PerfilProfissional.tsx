


import React, { useState, createContext, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




import ResultadoExame from './ResultadoExame';
import EditarPerfil from './EditarPerfil';
import Header from './Header'
import Footer from './Footer'



export const PacienteContext = createContext<string | null>(null);



const ProfissionalScreen: React.FC = () => { 

  
  const [pacienteNome, setPacienteNome] = useState<string | null>(null); 
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
 
 
  const [pacientes, setPacientes] = useState([
    { id: '1', nome: 'Paciente 1', imagem: 'https://img.icons8.com/bubbles/500/hello-kitty.png' },
    { id: '2', nome: 'Paciente 2', imagem: 'https://img.icons8.com/color/480/jake--v1.png' },
    { id: '3', nome: 'Paciente 3', imagem: 'https://img.icons8.com/color/480/totoro.png' },
    { id: '4', nome: 'Paciente 4', imagem: 'https://img.icons8.com/color/480/bt21-tata.png' },
    { id: '5', nome: 'Paciente 5', imagem: 'https://img.icons8.com/fluency/240/kenny-mccormick.png' },
    { id: '6', nome: 'Paciente 6', imagem: 'https://img.icons8.com/fluency/240/stan-marsh.png' },
  ]);



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



  const renderItem = ({ item }) => (
    <TouchableOpacity style={style.pacienteItem} onPress={() => navigation.navigate('ListaPaciente', { paciente: item })}>

      <Image source={{ uri: item.imagem }} style={style.pacienteImagem} />
      
      <View style={style.pacienteInfo}>
        <Text style={style.pacienteNome}>{item.nome}</Text>

      </View>

    </TouchableOpacity>


  );



  return (


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
            <Text style={style.perfilNome}>Profissional nome</Text>
            <Text style={style.perfilFuncao}>Plano que possui</Text>
          </View>


        </View>


        <View style={style.menu}>

          <View style={style.menuSeparador}/>


          <TouchableOpacity style={style.menuItem} onPress={() => navigation.navigate('EditarPerfil')}>

            <MaterialCommunityIcons name="pencil" size={24} color="#DAB9E3" />

            <Text style={style.menuItemTxt}>Editar Perfil</Text>

          </TouchableOpacity>



          <TouchableOpacity style={style.menuItem} onPress={() => navigation.navigate('FormularioProfissional')}>

            <MaterialCommunityIcons name="file-document" size={24} color="#DAB9E3" />
            <Text style={style.menuItemTxt}>Formulários</Text>

          </TouchableOpacity>



          <TouchableOpacity style={style.menuItem} onPress={() => navigation.navigate('ResultadoExame')}>

            <MaterialCommunityIcons name="clipboard-list" size={24} color="#DAB9E3" />
            <Text style={style.menuItemTxt}>Resultados de Exames</Text>

          </TouchableOpacity>


          <View style={style.menuSeparador}/>


          <View style={style.pacientesContainer}>

            <Text style={style.pacientesTitulo}>Seus Pacientes</Text>

            <FlatList
              data={pacientes}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              
            />

          </View>

        </View>


        <Footer/>


      </ScrollView>


    </View>



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


  pacientesContainer: {
    paddingHorizontal: '5%',
    marginTop: 30,
    backgroundColor: '#FBF9F7',
  },


  pacientesTitulo: {
    fontSize: 18,
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color: '#272727',
    marginBottom: 20,
  },




  pacienteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 2,
    marginBottom: 20,
  },


  shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },


  pacienteImagem: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },


  pacienteInfo: {
    flex: 1,
  },


  pacienteNome: {
    fontSize: 16,
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color: '#272727',
  },



});




export default ProfissionalScreen;





