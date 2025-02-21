import { Skeleton } from "@/components/ui";
import { Title } from "../title";

export function FilterSkeleton() {
  return (
    <nav className="w-[240px]">
      <Title>Фильтрация</Title>
      <div className="space-y-4 py-7">
        <Skeleton className="w-48 h-6" />
        <Skeleton className="w-32 h-6" />
      </div>
      <Title size="xs">Размеры</Title>
      <div className="space-y-4 py-4">
        <Skeleton className="w-20 h-6" />
        <Skeleton className="w-20 h-6" />
        <Skeleton className="w-20 h-6" />
      </div>
      <div className="pt-7 pb-14 my-8 border-y border-y-neutral-100 space-y-2">
        <Title size="xs">Цена от и до:</Title>
        <Skeleton className="w-full h-8" />
        <Skeleton className="w-full h-4" />
      </div>
      <div className="space-y-3 mb-8">
        <Title size="xs">Ингредиенты:</Title>
        <Skeleton className="w-40 h-6" />
        <Skeleton className="w-52 h-6" />
        <Skeleton className="w-56 h-6" />
        <Skeleton className="w-56 h-6" />
        <Skeleton className="w-44 h-6" />
        <Skeleton className="w-28 h-6" />
      </div>
      <Skeleton className="w-full h-10" />
    </nav>
  );
}
