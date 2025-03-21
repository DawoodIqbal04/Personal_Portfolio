import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Navbar";
import { navItems } from "@/data";
import Grid from "@/components/GridSection";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5 bg-[#000319]">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
