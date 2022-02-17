import dynamic from "next/dynamic";
import { ReactElement } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Layout from "../components/Layout";

import Hero from "../containers/Hero";
import OurServices from "../containers/OurServices";
import AboutUs from "../containers/AboutUs"
const CaseStudy = dynamic(() => import("../containers/CaseStudy"));
import ClientsAndTestimonials from "../containers/ClientsAndTestimonials"
import Blog from "../containers/Blog";
import ContactUs from "../containers/ContactUs";

const CookiesMessage = dynamic(() => import("../components/CookiesMessage"), {
  ssr: false,
});

const Home = () => {

  return (
    <>
      <Hero />
      <OurServices />
      <AboutUs />
      <CaseStudy />
      <ClientsAndTestimonials />
      <Blog />
      <ContactUs />
      <CookiesMessage />
      <ToastContainer />
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return (
    <Layout navBarVariant={false}>
      {page}
    </Layout>
  )
}

export default Home;
