import React, {useState, useCallback} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import StatusBarCustom from '../../components/Auth/StatusBar';
import { getMeApi } from '../../api/user';
import useAuth from '../../hooks/useAuth';
import ScreenLoading from '../../components/Auth/ScreenLoading';
import UserInfo from '../../components/Auth/Account/UserInfo';
import colores from '../../styles/colores';
import { ScrollView } from 'react-native-gesture-handler';
import Menu from '../../components/Auth/Account/Menu';
//import * as Animatable from 'react-native-animatable';

export default function Cuenta() {

  const [user, setUser] = useState(null)
  const { auth } = useAuth();

    useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(auth.token);
        setUser(response);
      })();
    }, [])
  );


  return (
    <>
       <StatusBarCustom backgroundColor={colores.bgDark} barStyle="light-content" />

      {!user ? (
              <ScreenLoading size="large" />
            ) : (
             //<Animatable.View animation="zoomIn">
              <ScrollView>
                <UserInfo user={user} />
                <Menu/>
              </ScrollView>
              //</Animatable.View>
      )}
    </>

  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});