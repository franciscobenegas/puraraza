import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import React from 'react'
import * as Animatable from 'react-native-animatable';

export default function Home() {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="zoomInUp">Estamos en Mortandad</Animatable.Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
});