import { Icon } from 'react-native-elements';
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  const navigation=useNavigation()
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      horizontal
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity 
        onPress={()=>navigation.navigate(item.screen)}
        style={tw`p-2 pl-6 pb-8 pt-4 m-2 w-40 bg-gray-200`}>
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={{ uri: item.image }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} type="antdesign" name="arrowright" color="white"/>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
