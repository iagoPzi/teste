import { SearchBar } from "./searchBar";

export function HeroSection() {
  return (
    <section className="bg-hero py-40 px-5">
      <div className="max-w-6xl mx-auto space-y-20">
        <img
          src="https://images.freeimages.com/vhq/images/previews/214/generic-logo-140952.png"
          alt=""
          className="w-96 mx-auto"
        />
        <SearchBar />
        <h2 className="text-white text-2xl text-center pt-20">
          UMA <b>VISÃO INTELIGENTE</b> PARA REALIZAR O SEU IDEAL
        </h2>
      </div>
    </section>
  );
}
