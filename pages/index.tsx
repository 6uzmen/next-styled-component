import dynamic from "next/dynamic";
import { ReactElement } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Layout from "../components/Layout";

const Hero = dynamic(() => import("../containers/Hero"));
const OurServices = dynamic(() => import("../containers/OurServices"));
const AboutUs = dynamic(() => import("../containers/AboutUs"));
const CaseStudy = dynamic(() => import("../containers/CaseStudy"));
const ClientsAndTestimonials = dynamic(
  () => import("../containers/ClientsAndTestimonials")
);
const Blog = dynamic(() => import("../containers/Blog"));
const ContactUs = dynamic(() => import("../containers/ContactUs"));
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
  return <Layout navBarVariant={false}>{page}</Layout>;
};

export default Home;
