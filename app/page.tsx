import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Navbar";
import { navItems } from "@/data";
import AboutSection from "@/components/AboutSection";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import ExperienceSection from "@/components/ExperienceSection";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5 bg-[#000319]">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <AboutSection />
        <RecentProjects />
        <Testimonials />
        <ExperienceSection />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
