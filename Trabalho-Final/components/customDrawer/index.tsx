import { View, Text, Image } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          width: "100%",
          height: 85,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/Perfil.png")}
          style={{ width: 65, height: 65 }}
        />
        <Text style={{ fontSize: 18, marginTop: 5, color: "#000" }}>
          Bem vindo !
        </Text>
      </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
}
