import Image from "next/image";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  className?: string;
}

type Props = Product;

export function ProductCart({
  name,
  description,
  price,
  imageUrl,
  className,
}: Props) {
  return (
    <Link
      href="/product"
      className={cn("h-96 flex flex-col justify-between", className)}
    >
      <div className="space-y-4">
        <div className="flex justify-center items-center bg-secondary rounded-md">
          <Image src={imageUrl} alt="" width={215} height={215} />
        </div>

        <div className="space-y-2">
          <Title className="line-clamp-2 leading-6">{name}</Title>

          <p className="text-sm text-gray-400 line-clamp-3">{description}</p>
        </div>
      </div>

      <div className="flex justify-between text-xl items-center">
        <span>
          от <b>{price} ₽</b>
        </span>

        <Button variant="secondary" className="gap-1">
          <PlusIcon size={16} />
          Добавить
        </Button>
      </div>
    </Link>
  );
}
