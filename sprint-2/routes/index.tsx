

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import StackRotas from './drawer';




export function Routes(){
    return(

    <NavigationContainer>
        <StackRotas/>
    </NavigationContainer>
    )
}