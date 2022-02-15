import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import Blog from "../containers/Blog";
import ContactUs from "../containers/ContactUs";
import Hero from "../containers/Hero";
import OurServices from "../containers/OurServices";

const AboutUs = dynamic(() => import("../containers/AboutUs"));
const CaseStudy = dynamic(() => import("../containers/CaseStudy"));
const ClientsAndTestimonials = dynamic(() =>
  import("../containers/ClientsAndTestimonials")
);
import Footer from "../components/Footer";
import Layout from "../components/Layout";
const CookiesMessage = dynamic(() => import("../components/CookiesMessage"), {
  ssr: false,
});

const Home = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <AboutUs />
      <CaseStudy />
      <ClientsAndTestimonials />
      <Blog />
      <ContactUs />
      <Footer />
      <CookiesMessage />
      <ToastContainer />
    </div>
  );
};

Home.getLayout = (page) => {
  return (
    <Layout navBarVariant={false}>
      {page}
    </Layout>
  )
}

export default Home;
