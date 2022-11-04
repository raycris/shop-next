import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const [avocao, setAvocao] = useState<TProduct[]>([]);
  const {
    query: { productId },
  } = useRouter();

  useEffect(() => {
    fetch(`/api/avo/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(productId);
        setAvocao(data);
      });
  }, [productId]);
  return (
    <section>
      {avocao?.map((item) => (
        <>
          <h1>pagina del ProductItem name: {item?.name}</h1>
          <h3>pagina del ProductItem id: {item?.id}</h3>
        </>
      ))}
    </section>
  );
};

export default ProductItem;
