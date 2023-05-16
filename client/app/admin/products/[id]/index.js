import React from "react";
import ProductComponent from "../../../components/ProductComponent";
import { useSearchParams } from "expo-router";

const index = () => {
  const { id } = useSearchParams();

  return <ProductComponent id={id} />;
};

export default index;
