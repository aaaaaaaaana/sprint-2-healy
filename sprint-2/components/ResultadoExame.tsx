import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from './Header'
import Footer from './Footer'


       
        
    
const ResultadoExame = () => {


 const navigation = useNavigation();

 
  return (
    <View style={style.container}>

        <Header navigation={navigation}/>


      <ScrollView 
        style={style.scrollView}
        contentContainerStyle={style.contentContainerScroll}>


      <Text style={style.titulo}>Resultados de Exames</Text>
      <Image
        source={require('../assets/ResuldadoExame.png')}
        style={style.imagemSelecionada}
      />

          <Footer />

      </ScrollView>


    </View>
  );
};

const style = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#FBF9F7',
    alignItems: 'center',
    justifyContent: 'center',

  },

  scrollView: {
    flex: 1,
    width: '100%',
  },


  contentContainerScroll: {
    paddingBottom: '95%', 
    paddingTop: '20%', 
  },


  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },


  imagemSelecionada: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },


 
});

export default ResultadoExame;