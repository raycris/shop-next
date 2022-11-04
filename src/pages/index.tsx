import React, { useEffect, useState } from "react";

import styled from "styled-components";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);
  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((data) => data.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);

  return (
    <Wrapper>
      <h1>Platzi and Next.js!</h1>
      {productList.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-color: red;
`;
