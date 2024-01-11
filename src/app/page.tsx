import { AboutSection } from "@/components/ui/aboutSection";
import { Header } from "../components/ui/header";
import { HeroSection } from "../components/ui/heroSection";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
