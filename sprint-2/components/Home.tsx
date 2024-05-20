

import React, { useState, useRef, useEffect } from 'react';
import { Text, StyleSheet, View, Platform, StatusBar, SafeAreaView, ScrollView, Animated, ImageBackground, Dimensions } from 'react-native';


import { useFonts } from 'expo-font';

import Header from "./Header"
import Footer from "./Footer"
import Sobre from './Sobre'
import Perfil from './PerfilPaciente'
import PerfilProfissional from './PerfilProfissional'
import NovaSenha from './NovaSenha'
import Predicao from './Predicao'



export default function Home({ navigation }){
  
  const [loaded] = useFonts({
    Clarendon: require('../assets/ClarendonLTRegular.ttf'),
    Corporate: require('../assets/CorporateSRegular.otf'),
    GeorgiaBold: require('../assets/georgia-bold-2.ttf'),
    Georgia: require('../assets/georgia-4.ttf'),
  });



  if (!loaded) {
    return null; 
  }



  return (
    

 

    <SafeAreaView style={style.container}>

      <StatusBar backgroundColor="#048A8F" />



      <Header navigation={navigation}/>

      <ScrollView
        style={style.scrollView}
        contentContainerStyle={style.contentContainer}
      >

      <View style={style.headerContainer}>
        <View style={style.headerOverlay} />
      </View>

        <Sobre/>
        
        <Footer/>

      
      </ScrollView>


    </SafeAreaView>

    
    
  );
}




const style = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#FBF9F7',
  },

                                                            
  scrollView: {
    flex: 1,
  },


  contentContainer: {
    alignItems: 'center',
  },


  headerContainer: {
    width: '100%',
    height: '10%',
  },
  

  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#048A8F',
  },



});






