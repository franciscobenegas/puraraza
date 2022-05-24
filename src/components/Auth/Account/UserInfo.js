import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Avatar  } from "react-native-paper";


export default function UserInfo(props) {
  const { user } = props;
  
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Bienvenido,</Text>
      
      <View style={styles.contTitulo}>
        <Avatar.Icon size={44} icon="account-cowboy-hat"/>
        <Text style={styles.titleName}>
          {user.name && user.lastName
            ? `${user.name} ${user.lastName}`
            : user.email}
            
        </Text>
      </View>

      
      <Text style={styles.titleEstablo}>{user.establesimiento?`${user.establesimiento}`:'Sin Establesimiento'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  titleName: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:10,
    marginTop:5
  },
  titleEstablo: {
    fontSize: 20,
    fontWeight: "bold",
    color:'mediumblue',
    marginLeft:20,
  },
  contTitulo:{
    flexDirection: "row",
    marginTop:10,
    marginLeft:20,
  }
});