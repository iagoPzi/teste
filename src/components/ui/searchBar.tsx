"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Menu } from "lucide-react";

const searchFormSchema = z.object({
  contract: z.string(),
  type: z.string(),
  loc: z.string(),
});

export function SearchBar() {
  const [searchByCode, setSearchByCode] = useState(false);
  function ToggleSearchType() {
    setSearchByCode(!searchByCode);
  }

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(searchFormSchema),
  });

  function submit(data: any) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className="grid grid-cols-searchBar justify-items-start gap-[1px] text-sm">
          {searchByCode ? (
            <>
              <input
                className="col-span-3 searchInput"
                placeholder="Digite o código do imóvel"
              />
            </>
          ) : (
            <>
              <select
                {...register("contract")}
                className="searchInput col-span-3 md:col-auto"
              >
                <option value="comprar">Comprar</option>
                <option value="vender">Vender</option>
              </select>

              <select
                {...register("type")}
                required
                className="searchInput col-span-1 md:col-auto"
              >
                <option value="" selected disabled>
                  Tipo
                </option>
                <option value="apartamento">Apartamento</option>
                <option value="casa">Casa</option>
                <option value="terreno">Terreno</option>
              </select>

              <select
                {...register("loc")}
                required
                className="searchInput col-span-4 md:col-auto"
              >
                <option value="" selected disabled>
                  Localização
                </option>
                <option value="sao mateus do sul">
                  SÃO MATEUS DO SUL - PR
                </option>
                <option value="irati">IRATI - PR</option>
              </select>
            </>
          )}

          <button
            type="submit"
            className="bg-yellow-400 py-2 px-5 font-bold w-full col-span-4 md:col-auto"
          >
            Buscar
          </button>

          <button
            type="button"
            onClick={ToggleSearchType}
            className="text-yellow-400 flex gap-1 items-center col-span-3 md:col-auto"
          >
            <Menu />
            {searchByCode ? "Voltar para busca" : "Buscar por código"}
          </button>

          {!searchByCode && (
            <button
              type="button"
              className="text-yellow-400 flex gap-1 items-center"
            >
              <Menu />
              Avançado
            </button>
          )}
        </div>
      </form>
    </>
  );
}
