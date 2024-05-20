


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



import Header from './Header'
import Footer from './Footer'




const FormularioScreen: React.FC = () => {
  
  const [hemoglobinaGlicada, setHemoglobinaGlicada] = useState('');
  const [creatinina, setCreatinina] = useState('');
  const [colesterolTotal, setColesterolTotal] = useState('');
  const [plaquetas, setPlaquetas] = useState('');
  const [hemacias, setHemacias] = useState('');
  const [leucocitos, setLeucocitos] = useState('');
  const [glicemia, setGlicemia] = useState('');
  const [potassio, setPotassio] = useState('');
  const [triglicerideos, setTriglicerideos] = useState('');
  const [urinaTipo1, setUrinaTipo1] = useState('');
  const [sedimentoQuantitativo, setSedimentoQuantitativo] = useState('');

  const navigation = useNavigation();



  const handleSubmit = () => {
    
    console.log('Dados do formulário:', {
      hemoglobinaGlicada, creatinina, colesterolTotal, plaquetas, hemacias, leucocitos,
      glicemia, potassio, triglicerideos, urinaTipo1, sedimentoQuantitativo,
    });
  };



  return (

    
    <View style={style.container}>

      <Header navigation={navigation}/>


        <ScrollView 
          style={style.scrollView}
          contentContainerStyle={style.contentContainerScroll}
        >

        <View style={style.profile}>

          <View style={style.profileImage}>

            
            <View style={{ backgroundColor: 'lightgray', width: 100, height: 100, borderRadius: 50 }} />
          </View>


          <View>

            <Text style={style.profileName}>Nome do Paciente</Text>
            <Text style={style.profileFunction}>Plano do paciente</Text>

          </View>


        </View>



        <View style={style.formularioContainer}>

          <Text style={style.titulo}>Dados Reunidos pelo Paciente</Text>

          <Text style={style.subtitulo}>Formulário</Text>



          <View style={style.campos}>

            <View style={style.campo}>
              <Text style={style.rotulo}>Hemoglobina Glicada:</Text>

              <TextInput
                style={style.input}
                onChangeText={setHemoglobinaGlicada}
                value={hemoglobinaGlicada}
                keyboardType="numeric"
              />

            </View>




            <View style={style.campo}>
              <Text style={style.rotulo}>Creatinina:</Text>
              <TextInput
                style={style.input}
                onChangeText={setCreatinina}
                value={creatinina}
                keyboardType="numeric"
              />
            </View>
            
          </View>




          <View style={style.campos}>

            <View style={style.campo}>     
              <Text style={style.rotulo}>Colesterol total:</Text>

              <TextInput
                style={style.input}
                onChangeText={setColesterolTotal}
                value={colesterolTotal}
                keyboardType="numeric"
              />

            </View>


            <View style={style.campo}>
              <Text style={style.rotulo}>Plaquetas:</Text>
              
              <TextInput
                style={style.input}
                onChangeText={setPlaquetas}
                value={plaquetas}
                keyboardType="numeric"
              />

            </View>

          </View>



          <View style={style.campos}>


            <View style={style.campo}>
              <Text style={style.rotulo}>Hemácias:</Text>

              <TextInput
                style={style.input}
                onChangeText={setHemacias}
                value={hemacias}
                keyboardType="numeric"
              />

            </View>



            <View style={style.campo}>
              <Text style={style.rotulo}>Leucócitos:</Text>

              <TextInput
                style={style.input}
                onChangeText={setLeucocitos}
                value={leucocitos}
                keyboardType="numeric"
              />

            </View>


          </View>



          <View style={style.campos}>

            <View style={style.campo}>
              <Text style={style.rotulo}>Glicemia:</Text>
              
              <TextInput
                style={style.input}
                onChangeText={setGlicemia}
                value={glicemia}
                keyboardType="numeric"
              />
              
            </View>



            <View style={style.campo}>
              <Text style={style.rotulo}>Potássio:</Text>

              <TextInput
                style={style.input}
                onChangeText={setPotassio}
                value={potassio}
                keyboardType="numeric"
              />

            </View>


          </View>



          <View style={style.campos}>

            <View style={style.campo}>
              <Text style={style.rotulo}>Triglicerídeos:</Text>

              <TextInput
                style={style.input}
                onChangeText={setTriglicerideos}
                value={triglicerideos}
                keyboardType="numeric"
              />

            </View>



            <View style={style.campo}>
              <Text style={style.rotulo}>Urina tipo I:</Text>

              <TextInput
                style={style.input}
                onChangeText={setUrinaTipo1}
                value={urinaTipo1}
              />

            </View>


          </View>



          <View style={style.campo}>
            <Text style={style.rotulo}>Sedimento quantitativo:</Text>

            <TextInput
              style={style.input}
              onChangeText={setSedimentoQuantitativo}
              value={sedimentoQuantitativo}
            />

          </View>



          <View style={style.botaoContainer}>

            <TouchableOpacity
            style={style.botao}
            onPress={handleSubmit}>
            <Text style={style.botaoTxt}>Registrar</Text>

          </TouchableOpacity>


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
    backgroundColor: 'white',
  },


  scrollView: {
    flex: 1,
    width: '100%',
  },


  contentContainerScroll: {
    paddingBottom: '95%', 
    paddingTop: '20%', 
  },


  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },


  profileImage: {
    marginRight: 16,
  },


  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },


  profileFunction: {
    fontSize: 14,
    color: 'gray',
  },


  formularioContainer: {
    padding: 20,
    backgroundColor: '#45B39D', 
    borderRadius: 10, 
    margin: 20, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    elevation: 5,
  },


  titulo: {
    fontSize: 18,
    fontFamily: 'Clarendon',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#FBF9F7',
  },


  subtitulo: {
    fontSize: 22,
    marginBottom: 30,
    color: '#FBF9F7',
    fontFamily: 'Clarendon',
    marginTop: 10,
    textAlign: 'center',
  },


  campos: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 15,
  },


  campo: {
    width: '48%', 
  },


  rotulo: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'Clarendon',
    color: '#FBF9F7', 
  },


  input: {
    borderWidth: 1,
    borderColor: '#FBF9F7', 
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FBF9F7',
    color: '#272727',
  },


  botaoContainer: {
    alignItems: 'center',
    marginTop: 20, 
  },


  botao: {
    backgroundColor: '#DAB9E6', 
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
    width: '80%', 
  },


  botaoTxt: {
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color: '#FBF9F7', 
    fontSize: 17,
  },




});



export default FormularioScreen;


