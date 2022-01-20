import dynamic from "next/dynamic";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
// import AboutUs from "../containers/AboutUs";
import Blog from "../containers/Blog";
// import ClientsAndTestimonials from "../containers/ClientsAndTestimonials";
import ContactUs from "../containers/ContactUs";
import Hero from "../containers/Hero";
import OurServices from "../containers/OurServices";
// import CaseStudy from "../containers/CaseStudy";
// const OurServices = dynamic(() => import("../containers/OurServices"));
const AboutUs = dynamic(() => import("../containers/AboutUs"));
const CaseStudy = dynamic(() => import("../containers/CaseStudy"));
const ClientsAndTestimonials = dynamic(() =>
  import("../containers/ClientsAndTestimonials")
);
import Footer from "../components/Footer";
const CookiesMessage = dynamic(() => import("../components/CookiesMessage"), {
  ssr: false,
});
// const Blog = dynamic(() => import("../containers/Blog"), { ssr: false, });
// const ContactUs = dynamic(() => import("../containers/ContactUs"), { ssr: false, });
// const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false, });
// const Hero = dynamic(() => import("../containers/Hero"), { ssr: false, });

const Home = () => {
  return (
    <div>
      <Head />
      <Navbar />
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

export default Home;
