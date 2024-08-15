import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <Hero/>
    <Courses/>
    <WhyChooseUs/>
    <Testimonial/>
    <Contact/>
   </main>       
  );
}
