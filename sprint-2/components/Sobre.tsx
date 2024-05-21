


import React, { useState, useRef } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, Animated, Dimensions, ScrollView} from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
 



const Card: React.FC<{ 

  titulo: string; 
  txt: string; 
  txt2?: string;
  icon?: string; 
  fundo: boolean; 
  icon2?: string;
  imagem?: string; 


}> = ({ titulo, txt, txt2, icon, fundo, icon2, imagem }) => {
  
  return(

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



const SobreScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [cardsLargura, setCardsWidth] = useState(0);

  const handleLayout = (event) => {
    setCardsWidth(event.nativeEvent.layout.width);
  };


  return (


    <SafeAreaView style={style.container}>

      <View style={style.contentContainer}>

        <View style={[style.imagemContainer, { height: screenHeight * 0.4 }]}>
          <Image
            style={style.imagem}
            source={require('../assets/maosegurandocoracao.jpg')}
            resizeMode="cover"
          />


          <View style={style.overlayConheca}>

            <Text style={style.txtTitulo}>Conheça Healy!!</Text>

            <Text style={style.txtTexto}>
              A saúde é única para cada pessoa. Tradicionalmente, os planos de saúde se baseiam em tabelas padronizadas, que nem sempre atendem às necessidades individuais. Healy surge para revolucionar essa realidade, oferecendo uma solução personalizada para você cuidar da sua saúde de forma inteligente. {'\n\n\n'}Healy é uma plataforma inovadora que utiliza inteligência artificial para identificar as áreas da sua saúde que precisam de atenção especial. Através de um aplicativo intuitivo, você poderá inserir seus dados pessoais, resultados de exames e informações relevantes sobre seu estilo de vida.

            </Text>


          </View>


        </View>




      
        <View style={style.overlayPlanos}>

          <Text style={style.txtTitulo}>Como funciona nossos serviço</Text>

          <Text style={style.txtTexto}>
            Está cansado de se sentir perdido na sua própria saúde? Healy te coloca no controle! Com o Healy, você tem acesso a um plano de saúde personalizado, baseado em inteligência artificial e seus dados únicos. {'\n\n\n'}Descubra seu perfil de saúde individualizado, previsões de problemas de saúde, recomendações de serviços médicos perfeitas para você e acompanhe sua jornada de saúde com monitoramento completo. Healy: Sua saúde, personalizada. Baixe agora e comece a cuidar da sua saúde de forma inteligente!

          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            onLayout={handleLayout}
            style={style.overlayPlanosCards}
          >

            <View style={{flexDirection: 'row' }}>

              <Card
                fundo
                icon= 'brain'
                titulo= "Neurológica"
                txt= "Trata as doenças que acometem o sistema nervoso central, nervos, nervos periféricos e músculos."
                txt2="• alzheimer • AVC • parkinson • esclerose múltipla"     
              />

              <Card
                fundo
                icon= 'heartbeat'
                titulo= "Cardiológica"
                txt= "Trata do coração e vasos sanguíneos."
                txt2= "• hipertensão • insuficiência cardíaca • cardiopatia congênita • arritimia cardiaca"

              />

              <Card
                fundo
                icon2= 'person'
                titulo= "Endocrinologia"
                txt= "Trata de hormônios e metabolismo."
                txt2= "• diabetes • obesidade  • doença de tireóide • osteoporose • osteopenia"

              />

              <Card
                fundo
                imagem='https://img.icons8.com/ios-filled/100/DAB9E3/kidney.png'
                titulo= "Nefrologia"
                txt= "Trata o sistema renal e urinário."
                txt2= "• tumor • cistos • cálculo renal • insuficiência renal "

              />

            

              <Card
                fundo
                imagem= 'https://img.icons8.com/ios-filled/100/DAB9E3/cancer-ribbon.png'
                titulo= "Oncologia"
                txt= "Trata de tumores benignos ou malignos."
                txt2= "• Cânceres "

              />
          


            </View>

          </ScrollView>


        </View>



         <View style={style.overlayPerfil}>

          <Text style={style.txtTitulo}>Pacientes e Profissionais de Saúde</Text>


          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            onLayout={handleLayout}
            style={style.overlayPerfilCards}
          >

            <View style={{flexDirection: 'row' }}>

              <Card
                fundo
                imagem= 'https://img.icons8.com/ios-filled/100/DAB9E3/medical-doctor.png'
                titulo= "Profissional"
                txt= "Tenha acesso completo à sua prática médica com a Healy. Visualize sua lista de pacientes, insira e revise informações médicas importantes em nossa plataforma intuitiva. Colabore eficientemente com seus pacientes para proporcionar um melhor cuidado médico."   
              />

              <Card
                fundo
                imagem= 'https://img.icons8.com/ios-filled/100/DAB9E3/triangular-bandage.png'
                titulo= "Paciente"
                txt= " Controle sua própria saúde com a Healy. Tenha acesso total ao seu perfil pessoal, onde você pode inserir informações como resultados de exames e acompanhar seu histórico médico. Colabore com seu médico e tome decisões informadas para uma vida mais saudável."

              />              


            </View>

          </ScrollView>


        </View>



        <View style={style.overlayRegistro}>

          <Text style={style.txtTitulo}>Registro e Segurança</Text>

          <Text style={style.txtTexto}>
            Na Healy, sua privacidade e segurança são garantidas. Armazenamos seus dados de forma segura, protegendo sua confidencialidade. Com acesso protegido por login, apenas pacientes e profissionais de saúde autorizados podem visualizar e modificar os dados.  {'\n\n\n'}Junte-se a nós para uma experiência personalizada e de alta qualidade em cuidados de saúde, onde você pode transformar sua jornada de bem-estar.

          </Text>

        </View>




      </View>


    </SafeAreaView>



  );
};



const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const style = StyleSheet.create({


  container: {
    flex: 1,

  },

  contentContainer: { 
    justifyContent: 'center',
    alignItems: 'center',
  },


  imagemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: screenHeight * 0.4,
    width: screenWidth,
  },


  imagem: {
    flex: 1,
    height: '100%',
    width: '85%',
    borderRadius: 20,

  },

  overlayRegistro: {
    backgroundColor: '#FBF9F7', 
    borderRadius: 15,
    width: '85%',
    paddingTop: 50,
    elevation: 2,
    marginBottom: '15%',
  },


  overlayConheca: {
    position: 'absolute',
    top: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF9F7', 
    borderRadius: 15,
    width: '85%',
    maxWidth: '110%',
    elevation: 2,
    marginBottom: '30%',
    marginTop: '10%',
    padding: 5,
  },


  overlayPlanos: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FBF9F7', 
    borderRadius: 15,
    width: '85%',
    maxWidth: '100%',
    marginTop: '60%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    marginBottom: '10%',
    paddingTop: 50,
    elevation: 2,
  },


  overlayPlanosCards: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#048A8F',
    paddingHorizontal: 15,
    width: '100%',
    maxWidth: '100%',
    borderRadius: 15,
    elevation: 2,
    height: '18%'
  },



  cardContainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    backgroundColor: '#ffff', 
    padding: 10,
    borderRadius: 20, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, 
    marginTop: 20,
    marginHorizontal: 30,
    width: '100%',
    height: '75%',
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



  overlayPerfil: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FBF9F7', 
    borderRadius: 15,
    width: '85%',
    maxWidth: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    marginBottom: '100%',
    paddingTop: 10,
    elevation: 2,
  },


  overlayPerfilCards: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#048A8F',
    paddingHorizontal: 15,
    width: '100%',
    maxWidth: '100%',
    borderRadius: 15,
    elevation: 2,
    height: '20%',
    
  },
  



  txtTitulo: {
    color: '#048A8F',
    fontSize: 20,
    fontFamily: 'Clarendon',
    marginBottom: 10,
    textAlign: 'center',
    padding: 10,
  },


  txtTexto: {
    color: '#272727',
    fontFamily: 'Corporate',
    fontSize: 15,
    textAlign: 'justify',
    justifyContent: 'center',
    marginBottom: 30,
    padding: 15,
    textWrapping: 'wrap',
  },


  icon: {
    width: 65,
    height: 65,
    alignItems: 'center'
  },

  

});

export default SobreScreen;





