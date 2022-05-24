import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import {layoutStyles} from '../styles';
import logo from '../../assets/logo.png'
import RegistroForm from '../components/Auth/RegistroForm';
import LoginForm from '../components/Auth/LoginForm';
import { Platform } from 'react-native-web';


export default function Auth() {
    const [showLogin, setShowLogin] = useState(true);
    const changeForm = () => setShowLogin(!showLogin);


  return (
    <View style={layoutStyles.container}>
        <Image style={styles.logo} source={logo}  />
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            {showLogin?<LoginForm setShowLogin={setShowLogin}/>:<RegistroForm setShowLogin={setShowLogin}/>}
        </KeyboardAvoidingView>
        
      
    </View>
  )
}

const styles = StyleSheet.create({
    logo:{
        width:'100%',
        height:300,
        resizeMode:'contain',
        marginBottom:-50,
        marginTop:-50,
    }
});