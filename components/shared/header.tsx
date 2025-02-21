import { User, ShoppingCart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui";
import { Container } from "./container";
import { SearchInput } from "./search-input";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b py-8">
      <Container className="flex justify-between gap-2">
        <div className="flex gap-2 shrink-0">
          <Link href="/" className="flex items-center gap-4">
            <Image width={35} height={35} src="/logo.png" alt="logo" />
            <div>
              <h1 className="uppercase font-black leading-none text-2xl">
                Next Pizza
              </h1>
              <p className="leading-none text-gray-400">вкусней уже некуда</p>
            </div>
          </Link>
        </div>

        <SearchInput />

        <div className="flex gap-2">
          <Button variant="outline" className="flex gap-2">
            <User size={16} />
            Войти
          </Button>
          <Button className="group relative">
            <b>520 ₽</b>
            <span className="h-full w-[2px] bg-white/25 mx-3" />
            <div className="flex items-center duration-200 gap-1 group-hover:opacity-0">
              <ShoppingCart size={16} />
              <b>3</b>
            </div>

            <ArrowRight className="opacity-0 absolute top-1/2 right-5 -translate-y-1/2 -translate-x-3 duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
          </Button>
        </div>
      </Container>
    </header>
  );
}
