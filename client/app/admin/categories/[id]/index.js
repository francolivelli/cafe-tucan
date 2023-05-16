import React from "react";
import CategoryComponent from "../../../components/CategoryComponent";
import { useSearchParams } from "expo-router";

const index = () => {
  const { id } = useSearchParams();

  return <CategoryComponent id={id} />;
};

export default index;
