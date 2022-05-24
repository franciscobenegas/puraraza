import { View, Text } from 'react-native'
import React, { useState }  from 'react'
import { TextInput, Button } from 'react-native-paper';
import Toast from "react-native-root-toast";
import { formStyles } from '../../styles';
import { registerApi } from "../../api/user";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function RegistroForm(props) {
 
  const { setShowLogin } = props;
  const [loading, setLoading] = useState(false);
  const showLogin = () => setShowLogin((prevState) => !prevState);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        await registerApi(formData);
        showLogin();
      } catch (error) {
            Toast.show("Error al registrar el usuario", {
                duration: Toast.durations.LONG,
                position: Toast.positions.CENTER,
                shadow: true,
                animation: true,
                hideOnPress: true,
             });
        setLoading(false);
      }
    },
  });

  return (
    <View>
      <TextInput
        label="Email"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
        left={
          <TextInput.Icon 
            name="at"
          />} 
      />
      <TextInput
        label="Nombre de usuario"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("username", text)}
        value={formik.values.username}
        error={formik.errors.username}
        left={
          <TextInput.Icon 
            name="account-cowboy-hat"
          />} 
      />
      <TextInput
        label="Contraseña"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
        secureTextEntry
        left={
          <TextInput.Icon 
            name="eye"
          />} 
      />
      <TextInput
        label="Repetir contraseña"
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
        secureTextEntry
          left={
          <TextInput.Icon 
            name="eye"
          />} 
      />
      <Button
        mode="contained"
        style={formStyles.btnSucces}
        onPress={formik.handleSubmit}
        loading={loading}
      >
        Registrarse
      </Button>
      <Button
        mode="text"
        style={formStyles.btnText}
        labelStyle={formStyles.btnTextLabel}
        onPress={showLogin}
      >
        Iniciar Sesión
      </Button>
    </View>
  );
}


function initialValues() {
  return {
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string().email().required(true),
    username: Yup.string().required(true),
    password: Yup.string().required(true),
    repeatPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], true),
  };
}