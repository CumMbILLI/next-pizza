"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
}

const categories = [
  { id: 0, title: "Пиццы", name: "pizza" },
  { id: 1, title: "Комбо", name: "combo" },
  { id: 2, title: "Завтрак", name: "breakfast" },
  { id: 3, title: "Закуски", name: "snacks" },
  { id: 4, title: "Коктейли", name: "cocktails" },
  { id: 5, title: "Кофе", name: "coffee" },
];

export function Categories({ className }: Props) {
  const activeCategoryIndex = useCategoryStore((state) => state.activeId);

  return (
    <section
      className={cn("inline-flex gap-1 bg-gray-100 p-2 rounded-2xl", className)}
    >
      {categories.map((category) => (
        <a
          key={category.id}
          href={`#${category.name}`}
          className={cn("px-3 py-2 rounded-xl", {
            "bg-white shadow text-primary font-bold":
              activeCategoryIndex === category.id,
          })}
        >
          {category.title}
        </a>
      ))}
    </section>
  );
}
