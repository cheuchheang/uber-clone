import { View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 bg-white pt-10 h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ height: 100, width: 100, resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <NavOptions />
      </View>
    </View>
  );
};

export default HomeScreen;
