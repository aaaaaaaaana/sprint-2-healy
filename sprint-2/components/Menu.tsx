



import React, { useState, useEffect  } from 'react';
import { StyleSheet, View, Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default ({ navigation }) => {

  return (


    <SafeAreaView style={style.container}>

      <View style={style.layout}>



        <TouchableOpacity
          style={style.cancelaContainer}
          onPress={() => navigation.goBack()}
        >

          <MaterialIcons name="cancel" size={35} color="#272727" />

        </TouchableOpacity>



        <View style={style.separador}/>

        <View style={style.menuItemContainer}>

          <TouchableOpacity
            style={style.menuItem}
            onPress={() => navigation.navigate('Home')}
          >

            <Ionicons name="home" size={40} color="#DAB9E3" />
            <Text style={style.txtTexto}>Home</Text>
          </TouchableOpacity>

        </View>



        <View style={style.separador}/>


        <View style={style.menuItemContainer}>

          <TouchableOpacity
            style={style.menuItem}
            onPress={() => navigation.navigate('Predicao')}
          >

            <Ionicons name="information-circle" size={40} color="#DAB9E3" />
            <Text style={style.txtTexto}>Predição</Text>
          </TouchableOpacity>

        </View>



        <View style={style.separador}/>




        <View style={style.menuItemContainer}>
          <TouchableOpacity
              style={style.menuItem}
              onPress={() => navigation.navigate('PerfilPaciente')}
            >

              <FontAwesome5 name="user-alt" size={35} color="#DAB9E3" />
              <Text style={style.txtTexto}>Perfil</Text>
            </TouchableOpacity>
          </View>



        <View style={style.separador}/>



        <View style={style.menuItemContainer}>

          <TouchableOpacity
            style={style.menuItem}
            onPress={() => navigation.navigate('Cadastro')}
          >


          <View style={style.iconContainer}>

            <Image
              style={style.icon}
              source={{ uri: 'https://img.icons8.com/material-rounded/100/DAB9E3/treatment-plan.png' }}
              resizeMode="contain"
            />

          </View>


            <Text style={style.txtTexto}>Cadastro</Text>
          </TouchableOpacity>

        </View>

        

        <View style={style.separador}/>



      </View>

    </SafeAreaView>


  );

};


const style = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#FBF9F7',
    marginTop: 20,
  },


  layout: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FBF9F7',
    marginTop: 10,
  },


  cancelaContainer: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 40,
    marginBottom: 40,
  },



  menuItemContainer: {
    width: '80%',
    alignItems: 'flex-start', 
    marginLeft: 30,
    },


  menuItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 20,
  },


  txtTexto: {
    color: '#272727',
    fontFamily: 'GeorgiaBold',
    fontSize: 18,
    marginLeft: 10, 
    marginTop: 10,
  },



  separador: {
    backgroundColor: '#272727',
    borderRadius: 0.51,
    height: 2,
    width: '90%', 
    alignSelf: 'center', 
    marginTop: 20, 
    marginBottom: 30, 
  },


  iconContainer: {
    width: 60,
    height: 60,
    alignItems: 'flex-start',
  },



  icon: {
    width: '80%',
    height: '80%',
  },




});

