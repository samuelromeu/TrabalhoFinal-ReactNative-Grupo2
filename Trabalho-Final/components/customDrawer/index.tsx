import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import AuthContext from "../../service/AuthContext";

export default function CustomDrawer(props) {
  const { user } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          width: "100%",
          height: 85,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/Perfil.png")}r
          style={{ width: 65, height: 65 }}
        />
        <Text style={{ fontSize: 18, marginTop: 5, color: "#000" }}>
          Bem vindo!
        </Text>
        <Text style={{ fontSize: 18, marginTop: 5, color: "#000" }}>
          {user?.nome || "usuário"}
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
