import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import formulario from '../../styles/formulario'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { postCalsificacionApi, getCalsificacionIdApi, updateCalsificacionApi} from '../../api/clasificacionApi'
import useAuth from '../../hooks/useAuth'
import {useNavigation} from '@react-navigation/native'

export default function AddClasificacion(props) {
  
  const { route:{params}, } = props;
  const {auth} = useAuth();
  const [loading, setLoading] = useState(false);
  const [nuevaClasificacion, setNuevaClasificacion] = useState(true);
  const [codClasificacion, setCodClasificacion] = useState(0)
  const navigation = useNavigation();

  useEffect(() => {
    (async()=> {
      if(params?.idClasificacion){
        setNuevaClasificacion(false);
        navigation.setOptions({title:'Modificar Direccion'})
        const response  = await getCalsificacionIdApi(auth, params.idClasificacion);
        setCodClasificacion(response.id)
        await formik.setFieldValue('_id', response._id);
        await formik.setFieldValue('nombre', response.nombre);
      }
    })();
  }, [params]);
  

  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:Yup.object(validationSchema()),
    onSubmit:async (formData)=>{
      setLoading(true);
      try {
        if(nuevaClasificacion) await postCalsificacionApi(auth, formData);
        else await updateCalsificacionApi(auth, formData, codClasificacion);
        navigation.goBack();
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }
  })

  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >  {nuevaClasificacion?'Nueva Clasificacion':'Modificar Clasificacion'} </Text>
      <TextInput 
        label ='Nombre' 
        onChangeText={(text)=> formik.setFieldValue('nombre',text)}
        value={formik.values.nombre}
        error = {formik.errors.nombre}
        />
      <Button 
        mode='contained' 
        style={[formulario.btnSucces,styles.btnSucces]}
        onPress={formik.handleSubmit}
        loading={loading}
        > 
        {nuevaClasificacion?'Crear':'Modificar'} 
      </Button>
    </View>
  )
}

function initialValues(){
  return{
    nombre:'',
  }
}

function validationSchema(){
  return{
    nombre: Yup.string().required('Nombre Requerido')
  }
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
  },
  titulo:{
    fontSize:20,
    paddingVertical:20,
  },
  btnSucces:{
    marginTop:50,
  }
})