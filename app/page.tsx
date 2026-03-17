import { Suspense } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ServicesCarousel } from "@/components/services-carousel";
import { AboutSection } from "@/components/about-section";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { GalleryBentoWithData } from "@/components/gallery-bento";
import { PlansSection } from "@/components/plans-section";
import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { LocalBusinessJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Header />
      <main>
        <Hero />
        <ServicesCarousel />
        <AboutSection />
        <TestimonialsCarousel />
        <Suspense fallback={null}>
          <GalleryBentoWithData />
        </Suspense>
        <PlansSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

