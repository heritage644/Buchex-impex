
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/aboutsection";
import { ServicesGrid } from "@/components/serviceGrid";
import { ProjectGallery } from "@/components/projectGallery";
import { WhyChooseUs } from "@/components/whychooseus";
import { ContactCTA } from "@/components/contactCTA";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <ProjectGallery />
      <WhyChooseUs />
      <ContactCTA />
    </div>
  );
}
