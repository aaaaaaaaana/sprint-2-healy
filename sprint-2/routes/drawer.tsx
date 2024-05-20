 

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';


import Home from '../components/Home'; 
import Menu from '../components/Menu'; 
import Login from '../components/Login';
import PerfilPaciente from '../components/PerfilPaciente';
import PerfilProfissional from '../components/PerfilProfissional';
import Cadastro from '../components/Cadastro';
import RedefinirSenha from '../components/RedefinirSenha';
import Formulario from '../components/Formulario';
import FormularioProfissional from '../components/FormularioProfissional';
import ListaPaciente from '../components/ListaPaciente';
import ResultadoExame from '../components/ResultadoExame'
import EditarPerfil from '../components/EditarPerfil'
import NovaSenha from '../components/EditarPerfil'
import Predicao from '../components/Predicao'


const Stack = createStackNavigator();


export default function App() {

  return (



    <NavigationContainer>

    

      <Stack.Navigator>



        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} 
        />



        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }} 
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} 
        />        


        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }} 
        />


        <Stack.Screen
          name="PerfilPaciente"
          component={PerfilPaciente}
          options={{ headerShown: false }} 
        />


        <Stack.Screen
          name="PerfilProfissional"
          component={PerfilProfissional}
          options={{ headerShown: false }} 
        />


        <Stack.Screen
          name="RedefinirSenha"
          component={RedefinirSenha}
          options={{ headerShown: false }} 
        />

        <Stack.Screen
          name="Formulario"
          component={Formulario}
          options={{ headerShown: false }} 
        />


        <Stack.Screen
          name="FormularioProfissional"
          component={FormularioProfissional}
          options={{ headerShown: false }} 
        />


        <Stack.Screen
          name="ListaPaciente"
          component={ListaPaciente}
          options={{ headerShown: false }} 
        />


        <Stack.Screen
          name="ResultadoExame"
          component={ResultadoExame}
          options={{ headerShown: false }} 
        />


        <Stack.Screen
          name="EditarPerfil"
          component={EditarPerfil}
          options={{ headerShown: false }} 
        />

        <Stack.Screen
          name="NovaSenha"
          component={NovaSenha}
          options={{ headerShown: false }} 
        />


        <Stack.Screen
          name="Predicao"
          component={Predicao}
          options={{ headerShown: false }} 
        />


      </Stack.Navigator>

    </NavigationContainer>

  );
}


