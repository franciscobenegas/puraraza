import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MenuConfig from '../screens/Config/MenuConfig'
import Clasificaion from '../screens/Config/Clasificaion';
import AddClasificacion from '../screens/Config/AddClasificacion';

const Stack = createStackNavigator();

export default function ConfigStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='causa-mortandad'
            component={MenuConfig}
            options={{
                title:'Configuraciones', headerShown:true
            }}
        />
        <Stack.Screen
            name='clasificacion'
            component={Clasificaion}
            options={{
                title:'Clasificacion', headerShown:true
            }}
        />
        <Stack.Screen
            name='add-clasificacion'
            component={AddClasificacion}
            options={{
                title:'Nueva Clasificacion', headerShown:true
            }}
        />
    </Stack.Navigator>
  )
}



