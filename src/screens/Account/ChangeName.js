import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import StatusBarCustom from "../../components/Auth/StatusBar";
import { getMeApi, updateUserApi } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import colores from "../../styles/colores";
import { formStyles } from "../../styles";
import ScreenLoading from '../../components/Auth/ScreenLoading';


export default function Changename() {
  const { auth } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getMeApi(auth.token);
        await formik.setFieldValue("name", response.name);
        await formik.setFieldValue("lastName", response.lastName);
      })();
    }, [])
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        const response = await updateUserApi(auth, formData);
        if (response.statusCode) throw "El nombre de usuario ya existe";
        navigation.goBack();
      } catch (error) {
        Toast.show(error, {
          position: Toast.positions.CENTER,
        });
        formik.setFieldError("name", true);
        formik.setFieldError("lastName", true);
      }
      setLoading(false);
    },
  });

  return (
    <>
      <StatusBarCustom backgroundColor={colores.bgDark} barStyle="light-content" />

     <View style={styles.container}>
        <TextInput
          label="Nombre"
          style={formStyles.input}
          onChangeText={(text) => formik.setFieldValue("name", text)}
          value={formik.values.name}
          error={formik.errors.name}
        />
        <TextInput
          label="Apellido"
          style={formStyles.input}
          onChangeText={(text) => formik.setFieldValue("lastName", text)}
          value={formik.values.lastName}
          error={formik.errors.lastName}
        />
        <Button
          mode="contained"
          style={formStyles.btnSucces}
          onPress={formik.handleSubmit}
          loading={loading}
        >
          Cambiar Nombre
        </Button>
      </View>
    </>
  );
}

function initialValues() {
  return {
    name: "",
    lastName: "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().min(4).required(true),
    lastName: Yup.string().min(4).required(true),
  };
}

var styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});