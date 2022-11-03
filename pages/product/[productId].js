import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  return (
    <div>
      <h1>pagina del ProductItem: {productId}</h1>
    </div>
  );
};

export default ProductItem;
