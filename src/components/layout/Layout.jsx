import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="containers p-4 w-full h-auto bg-yellow-50">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
