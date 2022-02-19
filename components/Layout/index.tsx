import Navbar from "../Navbar";
import Footer from "../Footer";
import Head from "../Head";
import { FC } from "react";

interface IProps {
  navBarVariant?: boolean;
}

const Layout: FC<IProps> = ({ children, navBarVariant }) => {
  return (
    <>
      <Head />
      <Navbar variant={navBarVariant} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
