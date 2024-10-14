import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import CatagoryCard from "../components/CatagoryCard";

const Home = () => {
  return (
    <View
      styles={{
        flex: 1,
        margin: 10,
      }}
    >
      <TextInput
        placeholder="Search"
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "lightgray",
        }}
      />
      <ScrollView horizontal={true}>
        <CatagoryCard />
      </ScrollView>
    </View>
  );
};

export default Home;
