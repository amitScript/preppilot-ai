
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Features from "../components/Features/Features";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import DashboardPreview from "../components/DashboardPreview/DashboardPreview";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
       <HowItWorks />
       <DashboardPreview />
       <Testimonials/>
       <FAQ />
       <CTA />
       <Footer />

    </>
  );
}

export default Home;