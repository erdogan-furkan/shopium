import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;