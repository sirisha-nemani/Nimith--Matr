import React from "react";
import Navbar from "./Components/NavBar";
import Hero from "./components/Hero";
import Services from "./Components/Services";
import HowWeWork from "./Components/HowWeWork";
import Clients from "./Components/Clients";
import Principles from "./Components/OurPrinciples";
import Testimonials from "./Components/Testimonials";
import ContactForm from "./Components/TalkToUS";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Services/>
        <HowWeWork/>
        <Clients/>
        <Testimonials/>
        <Principles/>
        <ContactForm/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;