import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import React from "react";
import { ToastContainer } from "react-toastify";
import Blog from "../containers/Blog";
import ContactUs from "../containers/ContactUs";
import Hero from "../containers/Hero";
import OurServices from "../containers/OurServices";

import AboutUs from "../containers/AboutUs"
import CaseStudy from "../containers/CaseStudy"
import ClientsAndTestimonials from "../containers/ClientsAndTestimonials"

import CookiesMessage from "../components/CookiesMessage"

import { getBlogPosts } from "../api/HubSpot/posts";

const Home = ({ blogs }) => {

  return (
    <div>
      <Hero />
      <OurServices />
      <AboutUs />
      <CaseStudy />
      <ClientsAndTestimonials />
      <Blog />
      <ContactUs />
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
