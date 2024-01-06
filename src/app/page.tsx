import { Header } from "./header";
import { About } from "./about";
import { SearchBar } from "./searchBar";
import { HeroSection } from "./heroSection";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <SearchBar />
      <About />
    </main>
  );
}
