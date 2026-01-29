import BenefitsSection from "@/Component/BenefitsSection";
import CheckoutSection from "@/Component/CheckoutSection";
import CustomerReview from "@/Component/CustomerReview";
import FloatingCTA from "@/Component/FloatingCTA";
import Footer from "@/Component/Footer";
import Hero from "@/Component/Hero";
import HoneyFeature from "@/Component/HoneyFeature";
import Hotline from "@/Component/Hotline";
import JarSection from "@/Component/JarSection";
import WhyChooseUs from "@/Component/WhyChooseUs";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Hotline />
        <JarSection />
        <FloatingCTA />
        <BenefitsSection />
        <HoneyFeature />
        <WhyChooseUs />
        <CheckoutSection />
        <CustomerReview />
        <Footer />
      </main>
    </>
  );
}
