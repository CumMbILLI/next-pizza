"use client";

import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { PlusIcon, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button, Input } from "../ui";

interface Props {
  placeholder?: string;
  className?: string;
}

export function SearchInput({ placeholder = "Поиск", className }: Props) {
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);

  useClickAway(ref, () => {
    setFocused(false);
  });

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 bg-black/50 z-30 w-svw h-svh duration-100",
          {
            "opacity-0 pointer-events-none": !focused,
          }
        )}
      />

      <div ref={ref} className={cn("relative mx-10 flex-1 z-40", className)}>
        <Search
          size={16}
          className="absolute top-1/2 left-4 -translate-y-1/2"
        />
        <Input
          className="bg-gray-100 border-0 pl-10"
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
        />

        <div
          className={cn(
            "absolute top-14 left-0 w-full invisible duration-200 opacity-0",
            {
              "visible top-10 opacity-100": focused,
            }
          )}
        >
          <Link
            href="/"
            className={cn(
              "flex items-center bg-white rounded-xl px-6 py-2 duration-100 hover:bg-secondary"
            )}
          >
            <Image
              src="/pizza/pizza-1.avif"
              alt="logo"
              width={48}
              height={48}
            />
            <div className="flex justify-between items-center w-full ml-2">
              <p>Сырный цыпленок</p>
              <Button className="gap-1">
                <PlusIcon size={16} />
                Добавить
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
