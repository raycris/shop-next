import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  return (
    <section>
      <h1>pagina del ProductItem: {productId}</h1>
    </section>
  );
};

export default ProductItem;
