import { DrawerClose, DrawerContent } from "@/components/ui/drawer";
import { X } from "lucide-react";

export function SideMenu() {
  return (
    <DrawerContent className="p-5">
      <DrawerClose asChild>
        <button className="ml-auto ">
          <X />
        </button>
      </DrawerClose>
      <div className="text-xl font-semibold text-center py-52 ">
        <ul className="space-y-5">
          <li>
            <a href="">INÍCIO</a>
          </li>

          <li>
            <a href="">SOBRE NÓS</a>
          </li>

          <li>
            <a href="">COMPRAR</a>
          </li>

          <li>
            <a href="">VENDER</a>
          </li>
          <li>
            <a href="">CONTATOS</a>
          </li>
        </ul>
      </div>
    </DrawerContent>
  );
}
