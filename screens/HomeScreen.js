import {
  Platform,
  View,
  StatusBar,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <View style={tw`flex-1 bg-white pt-10 h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ height: 100, width: 100, resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: (Platform.OS = "android" ? StatusBar.currentHeight : 0),
  },
});
