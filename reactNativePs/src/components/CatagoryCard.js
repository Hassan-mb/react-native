import { View, Text } from "react-native";
import React from "react";

const CatagoryCard = ({ name }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        width: 100,
        padding: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        height: 50,
      }}
    >
      <Text>{name}</Text>
    </View>
  );
};

export default CatagoryCard;
