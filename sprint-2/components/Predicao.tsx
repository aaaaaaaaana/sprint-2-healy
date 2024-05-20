


import React, { useState, useRef } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, Animated, Dimensions, ScrollView} from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
 


import Header from './Header'
import Footer from './Footer'


const Card: React.FC<{ 
  titulo: string; 
  txt: string; 
  txt2?: string;
  icon?: string; 
  fundo: boolean; 
  icon2?: string;
  imagem?: string; 
}> = ({ titulo, txt, txt2, icon, fundo, icon2, imagem }) => {


  
  return (


    <View style={[style.cardContainer, { width: screenWidth * 0.45 }]}>


      <View style={[style.iconContainer, { backgroundColor: fundo ? '#E1D4E9' : 'transparent' }]}>

        {imagem ? (
          <Image
            style={style.icon}
            source={{ uri: imagem }}
            resizeMode="contain"
          />

        ) : icon2 ? (

          <FontAwesome6 name={icon2} size={60} color={fundo ? '#DAB9E3' : '#E1D4E9'} />

        ) : (
          <FontAwesome5 name={icon} size={60} color={fundo ? '#DAB9E3' : '#E1D4E9'} />

        )}


      </View>


      <Text style={style.cardTitulo}>{titulo}</Text>
      <Text style={style.cardTexto}>{txt}</Text>
      <Text style={style.cardTexto}>{'\n'}{txt2}</Text>

    </View>


  );

};



const PredicaoScreen = () => {

  const scrollX = useRef(new Animated.Value(0)).current;
  const [cardsLargura, setCardsWidth] = useState(0);
  const navigation = useNavigation();


  const handleLayout = (event) => {
    setCardsWidth(event.nativeEvent.layout.width);

  };




  return (


    <SafeAreaView style={style.container}>

      <Header navigation={navigation}/>


      <ScrollView 
        style={style.scrollView}
        contentContainerStyle={style.contentContainerScroll}
      >

        <View style={style.contentContainer}>

          <View style={style.calcContainer}>

            <Text style={style.calcTitle}>Resultado da Predição</Text> 
            <Text style={style.calcText}>O preço é:</Text>
            <Text style={style.calcPrice}>R$ 2.000,00</Text>

          </View>



          <View style={style.cardsContainer}>
          
            <Text style={style.cardsTitle}>Áreas Cobertas no Plano:</Text>


            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              onLayout={handleLayout}
              style={style.cardsScrollView}
            >

              <View style={{ flexDirection: 'row' }}>


                <Card
                  fundo
                  icon="brain"
                  titulo="Neurológica"
                  txt="Trata as doenças que acometem o sistema nervoso central, nervos, nervos periféricos e músculos."
                  txt2="• alzheimer • esclerose múltipla • AVC • parkinson"
                />


                <Card
                  fundo
                  icon="heartbeat"
                  titulo="Cardiológica"
                  txt="Trata do coração e vasos sanguíneos."
                  txt2="• hipertensão • insuficiência cardíaca • cardiopatia congênita • arritimia cardíaca"
                />


                <Card
                  fundo
                  icon2="person"
                  titulo="Endocrinologia"
                  txt="Trata de hormônios e metabolismo."
                  txt2="• diabetes • obesidade  • doença de tireóide • osteoporose • osteopenia"
                />


                <Card
                  fundo
                  imagem="https://img.icons8.com/ios-filled/100/DAB9E3/kidney.png"
                  titulo="Nefrologia"
                  txt="Trata o sistema renal e urinário."
                  txt2="• tumor • cistos • cálculo renal • insuficiência renal"
                />


                <Card
                  fundo
                  imagem="https://img.icons8.com/ios-filled/100/DAB9E3/cancer-ribbon.png"
                  titulo="Oncologia"
                  txt="Trata de tumores benignos ou malignos."
                  txt2="• Cânceres"
                />


              </View>

            </ScrollView>


          </View>


        </View>

        <Footer/>

      </ScrollView>

    </SafeAreaView>


  );


};



const { width: screenWidth, height: screenHeight } = Dimensions.get('window');



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
    paddingBottom: '120%', 
    paddingTop: '20%', 
  },


  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },



  calcContainer: {
    backgroundColor: '#78B9C4', 
    borderRadius: 15,
    width: '85%',
    padding: 20,
    elevation: 2,
    marginBottom: 20,
    marginTop: 20
  },



  calcTitle: {
    color: '#fff', 
    fontSize: 18,
    fontFamily: 'Clarendon',
    marginBottom: 10,
  },



  calcText: {
    color: '#fff', 
    fontSize: 14,
    fontFamily: 'Georgia',
    marginBottom: 5,
  },



  calcPrice: {
    color: '#fff', 
    fontSize: 20,
    fontFamily: 'Clarendon',
    fontWeight: 'bold',
  },



  cardsContainer: {
    backgroundColor: '#fff', 
    borderRadius: 15,
    width: '85%',
    padding: 20,
    elevation: 2,
  },



  cardsTitle: {
    color: '#048A8F', 
    fontSize: 18,
    fontFamily: 'Clarendon',
    marginBottom: 10,
  },



  cardsScrollView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#048A8F',
    paddingHorizontal: 15,
    width: '100%',
    maxWidth: '100%',
    borderRadius: 15,
    elevation: 2,
    height: '70%'
  },



  cardContainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#FBF9F7', 
    padding: 10,
    borderRadius: 20, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, 
    marginTop: 20,
    marginHorizontal: 10, 
    width: 'auto', 
    height: '90%', 
    top: 8,
    marginLeft: 16,
  },



  iconContainer: {
    width: '58%', 
    height: '35%', 
    borderRadius: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },



  cardTitulo: {
    color: '#048A8F',
    fontFamily: 'Clarendon',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 15,
  },



  cardTexto: {
    fontSize: 12,
    color: '#272727',
    fontFamily: 'Georgia',
    textAlign: 'justify',
    justifyContent: 'center',
    marginTop: 5,
    padding: 5,
  },


  icon: {
    width: 65,
    height: 65,
    alignItems: 'center'
  },

  
});



export default PredicaoScreen;


