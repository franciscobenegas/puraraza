import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import AccountStack from './AccountStack';
import Home from '../screens/Home';
// import Contacto from '../screens/Contacto';
import Configuracion from '../screens/Configuracion';
import ConfigStack from './ConfigStack';

import colores from '../styles/colores';


const Tab = createMaterialBottomTabNavigator(); 

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            barStyle={style.navigation}
            screenOptions={({route})=>({
                tabBarIcon:(routerStatus)=>{
                    return setIcon(route, routerStatus)
                }
            })}
        >
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    title:'Inicio'
                }}
            />
            {/* <Tab.Screen
                name='contacto'
                component={Contacto}
                options={{
                    title:'Contacto'
                }}
            /> */}
            <Tab.Screen
                name='configuracion'
                component={ConfigStack}
                options={{
                    title:'Configuracion'
                }}
            />
            <Tab.Screen
                name='cuenta'
                component={AccountStack}
                options={{
                    title:'Cuenta'
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

function setIcon(route, routerStatus){
    let iconName='';
    switch (route.name) {
        case 'home':
            iconName = 'home'
            break;
        // case 'contacto':
        //     iconName = 'user'
        //     break;
        case 'configuracion':
            iconName = 'cog'
            break;
        case 'cuenta':
            iconName = 'bars'
            break;
        default:
            break;
    }
    return <AwesomeIcon name={iconName} style={style.icon} />
}

const style = StyleSheet.create({
    navigation:{
        backgroundColor:colores.bgDark,
    },
    icon:{
        fontSize:20,
        color:colores.fontLight,
    },
})