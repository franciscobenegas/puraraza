import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import StatusBarCustom from '../components/Auth/StatusBar';
import colores from '../styles/colores';
import { ScrollView } from 'react-native-gesture-handler';
import MenuConfig from './Config/MenuConfig';

export default function Configuracion() {
  return (
        <>
            <StatusBarCustom backgroundColor={colores.bgDark} barStyle="light-content" />

            <ScrollView >
               <MenuConfig/>
            </ScrollView>

        </>

  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
