import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Cuenta from '../screens/Account/Cuenta';
import ChangeUsername from '../screens/Account/ChangeUsername';
import Changename from '../screens/Account/ChangeName';
import Changeestablesimiento from '../screens/Account/ChangeEstablesimiento';
import ChangePassword from '../screens/Account/ChangePassword';
import ChangeEmail from '../screens/Account/ChangeEmail';


const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='cuentas'
            component={Cuenta}
            options={{
                title:'Cuenta', headerShown:true
            }}
        />
        <Stack.Screen
            name='change-user'
            component={ChangeUsername}
            options={{
                title:'Cambiar Usuario', headerShown:true
            }}
        />
        <Stack.Screen
            name='change-name'
            component={Changename}
            options={{
                title:'Cambiar Nombre', headerShown:true
            }}
        />
        <Stack.Screen
            name='change-estable'
            component={Changeestablesimiento}
            options={{
                title:'Cambiar Establemiento', headerShown:true
            }}
        />
        <Stack.Screen
            name='change-password'
            component={ChangePassword}
            options={{
                title:'Cambiar Contraseña', headerShown:true
            }}
        />
        <Stack.Screen
            name='change-email'
            component={ChangeEmail}
            options={{
                title:'Cambiar Email', headerShown:true
            }}
        />
    </Stack.Navigator>
  )
}