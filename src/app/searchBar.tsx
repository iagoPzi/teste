"use client";
import { useState } from "react";
import { CustomInput } from "./input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  buy: z.string(),
  type: z.string(),
  loc: z.string(),
  value: z.number(),
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
    console.log(data);
  }

  return (
    <>
      <div>
        <div className="">
          {searchByCode ? (
            <>
              <CustomInput placeholder="Digite o código do imóvel" />
            </>
          ) : (
            <form onSubmit={handleSubmit(submit)}>
              <div className="*:bg-zinc-300 *:p-1 *:placeholder-blue-950 *:text-blue-900 *:focus:outline-none">
                <input placeholder="Comprar" {...register("buy")} />
                <input placeholder="Tipo" {...register("type")} />
                <input placeholder="Localização" {...register("loc")} />
                <input placeholder="Valor de venda" {...register("value")} />
              </div>
              <button>submit</button>
            </form>
          )}
        </div>
        <div className="space-x-5">
          <button onClick={ToggleSearchType}>
            {searchByCode ? "Voltar para busca" : "Buscar por código"}
          </button>
          <button>Avançado</button>
        </div>
      </div>
    </>
  );
}
