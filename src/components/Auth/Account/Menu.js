import React from "react";
import { Alert } from "react-native";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../../hooks/useAuth";


export default function Menu() {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const logoutAccount = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estas seguro de que quieres salir de tu cuenta?",
      [
        {
          text: "NO",
        },
        { text: "SI", onPress: logout },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <List.Section>
        <List.Subheader>Mi cuenta</List.Subheader>
        <List.Item
          title="Cambiar Nombre"
          description="Cambia el nombre de tu cuenta"
          left={(props) => <List.Icon {...props} icon="face" />}
          onPress={() => navigation.navigate("change-name")}
        />
        <List.Item
          title="Cambiar Establesimiento"
          description="Cambia el nombre del Establesimiento"
          left={(props) => <List.Icon {...props} icon="home" />}
          onPress={() => navigation.navigate("change-estable")}
        />
        <List.Item
          title="Cambiar email"
          description="Cambia el email de tu cuenta"
          left={(props) => <List.Icon {...props} icon="at" />}
          onPress={() => navigation.navigate("change-email")}
        />
        <List.Item
          title="Cambiar Usuario"
          description="Cambia el nombre de usuario de tu cuenta"
          left={(props) => <List.Icon {...props} icon="sim" />}
          onPress={() => navigation.navigate("change-user")}
        />

      </List.Section>

      <List.Section>
        <List.Subheader>App</List.Subheader>
        <List.Item
          title="Inicio"
          description="Pagina de Inicio"
          left={(props) => <List.Icon {...props} icon="home" />}
          onPress={() => navigation.navigate("home")}
        />
        <List.Item
          title="Cerrar sesión"
          description="Cierra esta sesion y inicia con otra"
          left={(props) => <List.Icon {...props} icon="logout" />}
          onPress={logoutAccount}
        />
      </List.Section>
    </>
  );
}