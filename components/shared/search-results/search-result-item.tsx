import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props extends Pick<Product, "id" | "name" | "imageUrl"> {
  handleResetSearch: VoidFunction;
}

export function SearchResultItem({
  id,
  imageUrl,
  name,
  handleResetSearch,
}: Props) {
  return (
    <Link
      onClick={handleResetSearch}
      href={`/product/${id}`}
      className={cn(
        "flex items-center rounded-xl px-6 py-2 duration-100 hover:bg-secondary"
      )}
    >
      <Image src={imageUrl} alt={`product-${id}`} width={48} height={48} />
      <div className="flex justify-between items-center w-full ml-2">
        <p>{name}</p>
        <Button className="gap-1">
          <PlusIcon size={16} />
          Добавить
        </Button>
      </div>
    </Link>
  );
}
