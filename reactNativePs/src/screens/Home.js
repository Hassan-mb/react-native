import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import CatagoryCard from "../components/CatagoryCard";
import CatagoryList from "../components/CatagoryList";
import Product from "../components/Product";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <View style={{}}>
      <TextInput
        placeholder="Search"
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "lightgray",
        }}
      />

      <ScrollView horizontal>
        <CatagoryList />
      </ScrollView>

      <ScrollView>
        <ProductList />
      </ScrollView>
    </View>
  );
};

export default Home;
