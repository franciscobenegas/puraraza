import React, {useState, useCallback} from 'react'
import { StyleSheet, ScrollView ,View, Text ,TouchableOpacity } from 'react-native'
import { IconButton } from 'react-native-paper'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getCalsificacionApi } from '../../api/clasificacionApi';
import useAuth from '../../hooks/useAuth'
import ScreenLoading from '../../components/Auth/ScreenLoading';
import { size } from 'lodash';
import ClasificacionLista from '../../components/Clasificacion/ClasificacionLista';

export default function Clasificaion() {
    const {auth} = useAuth();
    const [clasificacion, setClasificacion] = useState(null)
    const [reloadClasificacion, setReloadClasificacion] = useState(false)
    const navigation = useNavigation();
    
    useFocusEffect(
        useCallback(() => {
            setClasificacion(null);
           (async()=>{
                const response = await getCalsificacionApi(auth);
                setClasificacion(response);
                 setReloadClasificacion(false);
           })();
          }, [reloadClasificacion])
        );
        
    

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Mis Clasificaiones</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('add-clasificacion')}>
        <View style={styles.addClasificacion2}>
            <Text style ={styles.addText} >Añadir Clasificacion</Text>
            <IconButton icon='arrow-right-bold-circle' size={25}/>
        </View>
      </TouchableOpacity>

    {!clasificacion?(
        <ScreenLoading size="large" />
    ):size(clasificacion) === 0 ? (
        <Text style={styles.noDatos}>Carga tu primera Clasificacion</Text>
    ):(
        <ClasificacionLista clasificacion = {clasificacion} setReloadClasificacion = {setReloadClasificacion}/>
    )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    titulo:{
        fontSize:20,
    },
    addClasificacion2:{
        borderWidth:0.9,
        borderRadius:15,
        borderColor:'darkgray',
        paddingHorizontal:15,
        paddingVertical:5,
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    addText:{
        fontSize:16,
    },
    loading:{
        marginTop:60,
    },
    noDatos:{
        fontSize:20,
        marginTop:30,
        textAlign:'center',
    }
})