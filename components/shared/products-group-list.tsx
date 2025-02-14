"use client";

import { useIntersection } from "react-use";
import { useEffect, useRef } from "react";

import { Product, ProductCart } from "./product-cart";
import { Title } from "./title";
import { useCategoryStore } from "@/store/category";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  name: string;
  products: Product[];
  categoryId: number;
  className?: string;
}

export function ProductsGroupList({
  title,
  name,
  products,
  categoryId,
  className,
}: Props) {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={cn("", className)} id={name}>
      <Title size="lg" className="font-extrabold my-8">
        {title}
      </Title>

      <div className="grid grid-cols-3 gap-16 h-full" ref={intersectionRef}>
        {products.map((product) => (
          <ProductCart key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
