"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function Header() {
  const width = useMediaQuery("(min-width: 768px)");

  return (
    <nav className="flex bg-red-300 px-2">
      <div className="p-3">
        <span>AVALIE SEU IMÓVEL COM A BDZ</span>
      </div>

      {width ? (
        <>
          <span className="flex justify-between w-full *:p-3 *:border-l-[1px]">
            <div>
              <span>INÍCIO</span>
            </div>
            <div>
              <span>SOBRE NÓS</span>
            </div>
            <div>
              <span>COMPRAR</span>
            </div>
            <div>
              <span>VENDER</span>
            </div>
            <div className="border-r-[1px]">
              <span>CONTATOS</span>
            </div>
          </span>
        </>
      ) : (
        <>
          <button>X</button>
        </>
      )}
    </nav>
  );
}
