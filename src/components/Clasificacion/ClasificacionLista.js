import React from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import { Button, IconButton } from 'react-native-paper';
import { map } from 'lodash';
import formulario from '../../styles/formulario'
import { deleteCalsificacionApi } from '../../api/clasificacionApi';
import useAuth from '../../hooks/useAuth';
import {useNavigation} from '@react-navigation/native';


export default function ClasificacionLista(props) {

    const {clasificacion, setReloadClasificacion} = props;
    const {auth} = useAuth();
    const navigation = useNavigation();
    
    const deleteClasificacionAlert = (clasificacion)=> {
        Alert.alert(
            'Atencion !!!',
            `Estas seguro que quieres eliminar la Clasificacion ${clasificacion.nombre}?`,
            [
                {
                    text:'NO'
                },
                {
                    text:'SI',
                    onPress:()=> eliminarClasificacion(clasificacion.id)
                }
            ],
            {cancelable:false}
        )
    }

    const eliminarClasificacion = async(idClasificacion)=> {
        try {
            await deleteCalsificacionApi(auth, idClasificacion);
            setReloadClasificacion(true);
        } catch (error) {
            console.log(error);
        }
    }

    const goToUpdateClasificacion = (idClasificacion)=> {
        navigation.navigate('add-clasificacion',{idClasificacion})
    }

  return (
    <View style = {styles.container}>
      {map(clasificacion,(clasi)=> (
          <View key={clasi.id} style={styles.clasificacionCaja}>
            <Text style={styles.textNombre}> {clasi.nombre} </Text>
            <View style={styles.action}>

                <IconButton icon='pencil' size={35} color='mediumblue' onPress={()=>goToUpdateClasificacion(clasi.id)} />
                <IconButton icon='delete' size={35} color='firebrick' onPress={()=> deleteClasificacionAlert(clasi)} />
                

            </View>
          </View>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        marginTop:30,
    },
    clasificacionCaja:{
        borderWidth:0.9,
        borderRadius:15,
        borderColor:'darkgray',
        paddingHorizontal:15,
        paddingVertical:5,
        //marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#fff',
        marginBottom:25,

    },
    textNombre:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:20,
        width:190,
    },
    action:{
        flexDirection:'row',
    },
    btnEliminar:{
        backgroundColor:'crimson'
    }
})