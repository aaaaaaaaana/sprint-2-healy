


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import Header from './Header'
import Footer from './Footer'




const FormularioScreen: React.FC = () => {
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [pais, setPais] = useState('');
  const [fuma, setFuma] = useState('');
  const [bebeAlcool, setBebeAlcool] = useState('');
  const [alergia, setAlergia] = useState('');
  const [medicamento, setMedicamento] = useState('');
  const [historicoDoenca, setHistoricoDoenca] = useState('');


  const navigation = useNavigation();


  const [submittedData, setSubmittedData] = useState<{
    idade: string;
    genero: string;
    altura: string;
    peso: string;
    estadoCivil: string;
    pais: string;
    fuma: string;
    bebeAlcool: string;
    alergia: string;
    medicamento: string;
    historicoDoenca: string;
  } | null>(null);

  const handleSubmit = () => {
    
    setSubmittedData({
      idade,
      genero,
      altura,
      peso,
      estadoCivil,
      pais,
      fuma,
      bebeAlcool,
      alergia,
      medicamento,
      historicoDoenca,
    });

    
    setIdade('');
    setGenero('');
    setAltura('');
    setPeso('');
    setEstadoCivil('');
    setPais('');
    setFuma('');
    setBebeAlcool('');
    setAlergia('');
    setMedicamento('');
    setHistoricoDoenca('');
  };



  return (

    
    <View style={style.container}>
    

      <Header navigation={navigation}/>


      <ScrollView 
        style={style.scrollView}
        contentContainerStyle={style.scrollViewContent}>

        <View style={style.formulario}>
          <Text style={style.titulo}>Formulário</Text>


          <View style={style.campo}>
            <Text style={style.rotulo}>Idade:</Text>

            <TextInput
              style={style.input}
              onChangeText={setIdade}
              value={idade}
              keyboardType="numeric"
            />

          </View>



          <View style={style.campo}>
            <Text style={style.rotulo}>Gênero:</Text>
            <TextInput
              style={style.input}
              onChangeText={setGenero}
              value={genero}
            />
          </View>




          <View style={style.campo}>
            <Text style={style.rotulo}>Altura:</Text>
            <TextInput
              style={style.input}
              onChangeText={setAltura}
              value={altura}
              keyboardType="numeric"
            />
          </View>



          <View style={style.campo}>
            <Text style={style.rotulo}>Peso:</Text>
            <TextInput
              style={style.input}
              onChangeText={setPeso}
              value={peso}
              keyboardType="numeric"
            />
          </View>



          <View style={style.campo}>
            <Text style={style.rotulo}>Estado Civil:</Text>
            <TextInput
              style={style.input}
              onChangeText={setEstadoCivil}
              value={estadoCivil}
            />
          </View>



          <View style={style.campo}>
            <Text style={style.rotulo}>País:</Text>
            <TextInput
              style={style.input}
              onChangeText={setPais}
              value={pais}
            />
          </View>



          <View style={style.campo}>
            <Text style={style.rotulo}>Fuma? Se sim, com que frequência?</Text>
            <TextInput
              style={style.input}
              onChangeText={setFuma}
              value={fuma}
            />
          </View>



          <View style={style.campo}>
            <Text style={style.rotulo}>Bebe álcool? Se sim, com que frequência?</Text>
            <TextInput
              style={style.input}
              onChangeText={setBebeAlcool}
              value={bebeAlcool}
            />
          </View>



          <View style={style.campo}>
            <Text style={style.rotulo}>Tem alergia? Se sim, quais?</Text>
            <TextInput
              style={style.input}
              onChangeText={setAlergia}
              value={alergia}
            />
          </View>



          <View style={style.campo}>
            <Text style={style.rotulo}>Medicamento? Se sim, quais?</Text>
            <TextInput
              style={style.input}
              onChangeText={setMedicamento}
              value={medicamento}
            />
          </View>



          <View style={style.campo}>
            <Text style={style.rotulo}>Histórico de doença? Se sim, quais e área que teve?</Text>
            <TextInput
              style={style.input}
              onChangeText={setHistoricoDoenca}
              value={historicoDoenca}
            />
          </View>


          <TouchableOpacity
              style={style.botao}
              onPress={handleSubmit}
            >

              <Text style={style.botaoTxt}>Registrar</Text>

            </TouchableOpacity>

        </View>

        {submittedData && (
          <View style={style.submittedData}>
            <Text style={style.submittedDataTitle}>Dados Registrados:</Text>
            <Text style={style.submittedDataText}>Idade: {submittedData.idade}</Text>
            <Text style={style.submittedDataText}>Gênero: {submittedData.genero}</Text>
            <Text style={style.submittedDataText}>Altura: {submittedData.altura}</Text>
            <Text style={style.submittedDataText}>Peso: {submittedData.peso}</Text>
            <Text style={style.submittedDataText}>Estado Civil: {submittedData.estadoCivil}</Text>
            <Text style={style.submittedDataText}>País: {submittedData.pais}</Text>
            <Text style={style.submittedDataText}>Fuma: {submittedData.fuma}</Text>
            <Text style={style.submittedDataText}>Bebe Álcool: {submittedData.bebeAlcool}</Text>
            <Text style={style.submittedDataText}>Alergia: {submittedData.alergia}</Text>
            <Text style={style.submittedDataText}>Medicamento: {submittedData.medicamento}</Text>
            <Text style={style.submittedDataText}>Histórico de Doença: {submittedData.historicoDoenca}</Text>
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
    color: '#FBF9F7'
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


  botaoTxt: {
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color: '#FBF9F7', 
    fontSize: 17,
  },

  botao: {
    backgroundColor: '#DAB9E3', 
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 50,
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



export default FormularioScreen;



