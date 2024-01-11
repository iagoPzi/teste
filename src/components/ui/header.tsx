"use client";
import { Menu } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SideMenu } from "./sideMenu";

export function Header() {
  return (
    <nav className="flex justify-between bg-[#181a33] px-2 md:px-5 text-zinc-300">
      <div className="p-3">
        <h6>AVALIE SEU IMÓVEL COM A BDZ</h6>
      </div>

      <div className="grid-cols-5 *:py-3 *:border-l-[1px] w-[65%] items *:border-zinc-700 lg:grid hidden">
        <button>INÍCIO</button>
        <button>SOBRE NÓS</button>
        <button>COMPRAR</button>
        <button>VENDER</button>
        <button className="border-r-[1px]">CONTATOS</button>
      </div>
      <button className="lg:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <button>
              <Menu />
            </button>
          </DrawerTrigger>
          <SideMenu />
        </Drawer>
      </button>
    </nav>
  );
}
