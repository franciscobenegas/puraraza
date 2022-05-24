import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import useAuth from "../../hooks/useAuth";
import { loginApi } from "../../api/user";
import { formStyles } from "../../styles";

export default function LoginForm(props) {
  const { setShowLogin } = props;
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth();

  const showRegister = () => setShowLogin((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        const response = await loginApi(formData);
        if (response.statusCode) throw "Error en el usuario o contraseña";
        login(response);
      } catch (error) {
        Toast.show(error, {
          position: Toast.positions.CENTER,
        });
        setLoading(false);
      }
    },
  });

  return (
    <View>

      <TextInput
        label="Email o Usuario"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("identifier", text)}
        value={formik.values.identifier}
        error={formik.errors.identifier}
        left={
          <TextInput.Icon 
            name="account-cowboy-hat"
            style={{ width: 50, height: 50, tintColor: 'red' }}
        />} 
      />

      <TextInput
        label="Contraseña"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon 
            name={ showPassword? "eye-off":"eye"} 
            onPress={()=>setShowPassword(!showPassword)} 
          />} 
          left={
          <TextInput.Icon 
            name="lock"
          />} 
        
      /> 

      <Button
        mode="contained"
        style={formStyles.btnSucces }
        onPress={formik.handleSubmit}
        loading={loading}
      >
        Entrar
      </Button>
      <Button
        mode="text"
        style={formStyles.btnText}
        labelStyle={formStyles.btnTextLabel}
        onPress={showRegister}
      >
        Registrarse
      </Button>
    </View>
  );
}

function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

function validationSchema() {
  return {
    identifier: Yup.string().required(true),
    password: Yup.string().required(true),
  };
}



const style = StyleSheet.create({
    boton:{
        marginTop:20,
    },
})

