import { View, Text } from "react-native";
import React from "react";
import { getAllItems } from "../api/product";
import Product from "./Product";
import { useQuery } from "react-query";

const ProductList = () => {
  const { data } = useQuery({
    queryKey: ["get All Products"],
    queryFn: getAllItems,
  });

  console.log(data);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      {data?.map((product) => {
        return <Product key={product._id} name={product.name} />;
      })}
    </View>
  );
};

export default ProductList;
