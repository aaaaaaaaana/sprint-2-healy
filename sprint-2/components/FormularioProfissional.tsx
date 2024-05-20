


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import Header from './Header'
import Footer from './Footer'


const FormularioProfissionalScreen: React.FC = () => {
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



    const [submittedData, setSubmittedData] = useState<{

    hemoglobinaGlicada: string;
    creatinina: string;
    colesterolTotal: string;
    plaquetas: string;
    hemacias: string;
    leucocitos: string;
    glicemia: string;
    potassio: string;
    triglicerideos: string;
    urinaTipo1: string;
    sedimentoQuantitativo: string;

  } | null>(null);


  const handleSubmit = () => {

    setSubmittedData({
      hemoglobinaGlicada,
      creatinina,
      colesterolTotal,
      plaquetas,
      hemacias,
      leucocitos,
      glicemia,
      potassio,
      triglicerideos,
      urinaTipo1,
      sedimentoQuantitativo,
    });


    setHemoglobinaGlicada('');
    setCreatinina('');
    setColesterolTotal('');
    setPlaquetas('');
    setHemacias('');
    setLeucocitos('');
    setGlicemia('');
    setPotassio('');
    setTriglicerideos('');
    setUrinaTipo1('');
    setSedimentoQuantitativo('');

  };

  
  const navigation = useNavigation();



  return (

    <View style={style.container}>

      <Header navigation={navigation}/>


      <ScrollView 
        style={style.scrollView}
        contentContainerStyle={style.scrollViewContent}>


      <View style={style.formulario}>

        <Text style={style.titulo}>Formulário Profissional</Text> 
        

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



        <View style={style.campo}>
          <Text style={style.rotulo}>Sedimento quantitativo:</Text>

          <TextInput
            style={style.input}
            onChangeText={setSedimentoQuantitativo}
            value={sedimentoQuantitativo}
          />

        </View>



        <TouchableOpacity
          style={style.botao}
          onPress={handleSubmit}>
          <Text style={style.botaoTxt}>Registrar</Text>

        </TouchableOpacity>
        
      </View>

      {submittedData && (

          <View style={style.submittedData}>
          
            <Text style={style.submittedDataTitle}>Dados Registrados:</Text>

            <Text style={style.submittedDataText}>Hemoglobina Glicada: {submittedData.hemoglobinaGlicada}</Text>

            <Text style={style.submittedDataText}>Creatinina: {submittedData.creatinina}</Text>

            <Text style={style.submittedDataText}>Colesterol Total: {submittedData.colesterolTotal}</Text>

            <Text style={style.submittedDataText}>Plaquetas: {submittedData.plaquetas}</Text>

            <Text style={style.submittedDataText}>Hemácias: {submittedData.hemacias}</Text>

            <Text style={style.submittedDataText}>Leucócitos: {submittedData.leucocitos}</Text>

            <Text style={style.submittedDataText}>Glicemia: {submittedData.glicemia}</Text>

            <Text style={style.submittedDataText}>Potássio: {submittedData.potassio}</Text>

            <Text style={style.submittedDataText}>Triglicerídeos: {submittedData.triglicerideos}</Text>

            <Text style={style.submittedDataText}>Urina Tipo I: {submittedData.urinaTipo1}</Text>

            <Text style={style.submittedDataText}>Sedimento Quantitativo: {submittedData.sedimentoQuantitativo}</Text>
          </View>
        )}
      


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


  scrollViewContent: {
    flexGrow: 1, 
    padding: 30,
    paddingBottom: '95%', 
    paddingTop: '20%', 
  },


  formulario: {
    backgroundColor: '#048A8F',
    padding: 20,
    borderRadius: 10,
    width: width * 0.85, 
    marginVertical: 20,
  },


  titulo: {
    fontSize: 24,
    fontFamily: 'Clarendon',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white', 
  },


  campo: {
    marginBottom: 15,
  },


  rotulo: {
    fontSize: 16,
    marginBottom: 10,
    color: '#FBF9F7',
    fontFamily: 'Clarendon',
    marginTop: 10,
  },


  input: {
    borderWidth: 1,
    borderColor: '#FBF9F7', 
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FBF9F7',
    color: '#272727', 
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



  submittedData: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#E1D4E9', 
    borderRadius: 10,
    width: '85%',
  },


  submittedDataTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DAB9E6',
    marginBottom: 10,
  },


  submittedDataText: {
    fontSize: 14,
    color: '#272727',
  },

});



export default FormularioProfissionalScreen;


