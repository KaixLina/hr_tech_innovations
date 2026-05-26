import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <StatsStrip />
        <Features />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
// import Navigation from "@/components/Navigation";

// export default function HomePage() {
//   return (
//     <div>
//       <Navigation />
//     </div>
//   );
// }
