"use client";

import { useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

import { Api } from "@/services/api-client";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";

import { SearchResultsList } from "./search-results/search-results-list";
import { Input } from "../ui";
import { Search } from "lucide-react";

interface Props {
  placeholder?: string;
  className?: string;
}

export function SearchInput({ placeholder = "Поиск", className }: Props) {
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.products
        .getSearchProduct(searchValue)
        .then((res) => setSearchResults(res));
    },
    250,
    [searchValue]
  );

  const handleResetSearch = () => {
    setFocused(false);
    setSearchValue("");
  };

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
          value={searchValue}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          className="bg-gray-100 border-0 pl-10"
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <SearchResultsList
          results={searchResults}
          inputFocused={focused}
          handleResetSearch={handleResetSearch}
        />
      </div>
    </>
  );
}
