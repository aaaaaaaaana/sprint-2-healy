


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

 




export default function Header ({ navigation }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [paginaTitulo, setPaginaTitulo] = useState('Home'); 
  const [voltarIcon, setVoltarIcon] = useState(false);

  useEffect(() => {   
    checkLoginStatus();
  }, []);


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { 
      const routeName = navigation.getState().routes[navigation.getState().index].name;
      setPaginaTitulo(routeName === 'Home' ? 'Home' : routeName);

      setVoltarIcon(routeName === 'PerfilPaciente' || routeName === 'EditarPerfil');
    });

    return unsubscribe;
  }, [navigation]);


  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      setIsLoggedIn(!!token);

    } catch (error) {

      console.error('Erro ao verificar status de login:', error);

    }

  };


 
  return (

    <SafeAreaView style={style.headerContainer}>
 

  
      <View style={style.contentContainer}>
  
         <View style={style.iconContainer1}>

          {voltarIcon ? (

            <TouchableOpacity onPress={() => navigation.goBack()}>

                  <Ionicons 
                    name="arrow-back-outline" 
                    size={30} 
                    color="#DAB9E3" 
                  />

                </TouchableOpacity>
              
              ) : (

                <TouchableOpacity
                  onPress={() => {

                    if (isLoggedIn) {
                        navigation.navigate("PerfilPaciente");

                      } else {
                        navigation.navigate("Login");
                      }
                  }}
                >

                  <FontAwesome5 
                    name="heartbeat" 
                    size={30} 
                    color="#DAB9E3" 
                  />

                </TouchableOpacity>

              )}

        </View>
        
  
  
  
        <View style={style.txtContainer}>

            <Text style={style.txtTitulo}>
              {paginaTitulo}
            </Text>
  
  
        </View>
  
  
  
        <View style={style.iconContainer2}>
  
          <TouchableOpacity
            onPress={() => navigation.navigate("Menu")}
          >
  
            <Entypo 
              name="menu" 
              size={33} 
              color="#DAB9E3" 
            />
  
          </TouchableOpacity>
  
        </View>

      </View>


    </SafeAreaView>
  )
}
 


const style = StyleSheet.create({
 
 
  headerContainer: {
    backgroundColor: '#048A8F',
    paddingHorizontal: 16,
    paddingBottom: 40,
    paddingTop: 25,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '15%'
  },
 



  contentContainer: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
 
 
  iconContainer1: {
    flex: 1, 
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'flex-start', 
    top: '10%',

  },


  iconContainer2: {
    flex: 1, 
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'flex-end', 
    top: '10%',
  },


 
  txtContainer: {
    flex: 3, 
    justifyContent: 'center',
    alignItems: 'center',
    top: '10%',

  },
 

  txtTitulo: {
    color: '#ffff', 
    fontSize: 20,
    fontFamily: 'Georgia',
    fontWeight: 'bold',
  },
 

 
 
});
 
 
 
 