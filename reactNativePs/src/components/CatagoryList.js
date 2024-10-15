import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useQuery } from "react-query";
import { getAllCategories } from "../api/catagory";
import CatagoryCard from "./CatagoryCard";

const CatagoryList = () => {
  const { data } = useQuery({
    queryKey: ["get All Catagories"],
    queryFn: getAllCategories,
  });

  console.log(data);
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {data?.map((catagory) => {
        return <CatagoryCard key={catagory._id} name={catagory.name} />;
      })}
    </View>
  );
};

export default CatagoryList;
