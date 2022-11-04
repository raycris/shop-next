import React from "react";
import Navbar from "@components/Navbar/Navbar";

/* En react 18 children fue eliminado del tipo FC, 
para que typescript no de error debes de añadirlo por cuenta propia */

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
