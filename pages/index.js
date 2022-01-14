import dynamic from "next/dynamic";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import AboutUs from "../containers/AboutUs";
import Blog from "../containers/Blog";
import ClientsAndTestimonials from "../containers/ClientsAndTestimonials";
import ContactUs from "../containers/ContactUs";
import Hero from "../containers/Hero";
import OurServices from "../containers/OurServices";
import CaseStudy from "../containers/CaseStudy";
// const OurServices = dynamic(() => import("../containers/OurServices"), { ssr: false, });
// const CaseStudy = dynamic(() => import("../containers/CaseStudy"), { ssr: false, });
// const ClientsAndTestimonials = dynamic(() => import("../containers/ClientsAndTestimonials"), { ssr: false, });
// const Blog = dynamic(() => import("../containers/Blog"), { ssr: false, });
// const ContactUs = dynamic(() => import("../containers/ContactUs"), { ssr: false, });
// const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false, });
// const AboutUs = dynamic(() => import("../containers/AboutUs"), { ssr: false, });
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
      <ToastContainer />
    </div>
  );
};

export default Home;
