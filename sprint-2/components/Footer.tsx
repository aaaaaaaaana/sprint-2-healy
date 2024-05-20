


import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, Text, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';



const { width } = Dimensions.get('window');


export default function Footer (  ) {


  const openZap = () => {
    Linking.openURL('whatsapp://send'); // whatsapp://send?phone=seu-numero-de-telefone
  };


  const openInsta = () => {
    Linking.openURL('https://www.instagram.com/');
  };


  const openEmail = () => {
    Linking.openURL('https://mail.google.com/mail/u/0/#inbox');
  };
 

  return (


    <SafeAreaView style={style.container}>

      <View style={style.footer}>
      
        <View style={style.logoContainer}>

          <Image 
            style={style.logo}
            source={require('../assets/LOGO.png')}
          />

        </View>


        <View style={style.separador}/>

            
        <View style={style.iconsContainer}>

          <TouchableOpacity style={style.icon} onPress={openZap}>

            <FontAwesome 
              name="whatsapp"
              size={20}
              color="#FBF9F7"

            />

          </TouchableOpacity>



          <TouchableOpacity style={style.icon} onPress={openInsta}>

            <MaterialCommunityIcons 
              name="instagram"
              size={20}
              color="#FBF9F7"

            />

          </TouchableOpacity>



          <TouchableOpacity style={style.icon} onPress={openEmail}>

            <MaterialCommunityIcons 
              name="email-multiple" 
              size={20} 
              color="#FBF9F7" 
            />

          </TouchableOpacity>

        </View>
  

        <View style={style.separador}/>


        <View style={style.txtContainer}>


          <Text style={style.txt}>       RM 551401       |       RM 551856       |       RM 99708       {'\n\n'}       RM 98672       |       RM 552295       </Text>


        </View> 


      </View>  


    </SafeAreaView>


  )

}




const style = StyleSheet.create({


  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBF9F7',
  },


  footer: {
    backgroundColor: '#272727',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: '10%',
    justifyContent: 'flex-end',
    
  },


  logoContainer: {
    alignItems: 'center',
    marginBottom: '5%',
  },


  logo: {
    width: width * 0.1,
    height: width * 0.1,
    marginTop: 50,
    marginBottom: 30,
  },


  separador: {
    backgroundColor: '#fbf9f7',
    borderRadius: 0.51,
    height: 1,
    left: 0,
    alignItems: 'center',
    top: 0,
    width: '90%',
  },


  iconsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginBottom: '10%',
    marginTop: '10%',
  },


  icon: {
    padding: 10,
    marginHorizontal: '5%',
  },


  txtContainer: {
    flexWrap: 'wrap', 
    alignItems: 'center',
    marginTop: '10%',
  },


  txt: {
    color: '#FBF9F7',
    fontFamily: 'Clarendon',
    fontSize: width * 0.02,
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 10,
  },


});


