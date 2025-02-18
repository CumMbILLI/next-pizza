import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { SearchResultItem } from "./search-result-item";
import { Title } from "../title";

interface Props {
  inputFocused: boolean;
  results: Product[];
  handleResetSearch: VoidFunction;
}

export function SearchResultsList({
  results,
  inputFocused,
  handleResetSearch,
}: Props) {
  if (!results.length)
    return (
      <div
        className={cn(
          "absolute top-14 left-0 w-full invisible duration-200 opacity-0 space-y-1 bg-white rounded-xl py-2",
          {
            "visible top-12 opacity-100": inputFocused,
          }
        )}
      >
        <Title className="text-center text-gray-500">
          По вашему запросу ничего не найдено
        </Title>
      </div>
    );

  return (
    <div
      className={cn(
        "absolute top-14 left-0 w-full invisible duration-200 opacity-0 space-y-1 bg-white rounded-xl py-2",
        {
          "visible top-12 opacity-100": inputFocused,
        }
      )}
    >
      {results.map((product) => (
        <SearchResultItem
          key={product.id}
          id={product.id}
          name={product.name}
          imageUrl={product.imageUrl}
          handleResetSearch={handleResetSearch}
        />
      ))}
    </div>
  );
}
