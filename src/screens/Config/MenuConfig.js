import { Alert } from 'react-native'
import { List } from "react-native-paper";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';

export default function MenuConfig() {
  const navigation = useNavigation();
  return (
    <Animatable.View animation="zoomIn">
    <List.Section>
        <List.Subheader>Listado de Configuraciones</List.Subheader>
        <List.Item
          title="Clasificaciones"
          description="Configuracion de las Clasificaciones"
          left={(props) => <List.Icon {...props} icon="barcode-scan" />}
          onPress={() => navigation.navigate("clasificacion") }
        />
        <List.Item
          title="Causa de Mortandad"
          description="Configuracion de las Causas de las Mortandades"
          left={(props) => <List.Icon {...props} icon="coffin" />}
          onPress={() => Alert.alert('Mensaje','Carga de Causa de Mortandad')}
        />
        <List.Item
          title="Potrero"
          description="Configuracion de los Potreros"
          left={(props) => <List.Icon {...props} icon="barn" />}
          onPress={() => Alert.alert('Mensaje','Carga de Potrero')}
        />
        <List.Item
          title="Tipo de Raza"
          description="Configuracion de los Tipos de Razas"
          left={(props) => <List.Icon {...props} icon="cow" />}
          onPress={() => Alert.alert('Mensaje','Carga de Tipo de Raza')}
        />
        <List.Item
          title="Propietarios"
          description="Configuracion de los Propietarios"
          left={(props) => <List.Icon {...props} icon="account-cowboy-hat" />}
          onPress={() => Alert.alert('Mensaje','Carga de Propietarios')}
        />

      </List.Section>

    </Animatable.View>
 
  )
}
