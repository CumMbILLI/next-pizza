import { Popover, PopoverContent, PopoverTrigger } from "../ui";
import { ArrowUpDown } from "lucide-react";

const sortContent = ["Рейтингом", "Названию", "Дате"];

export function SortPopup() {
  const selectedSort = "рейтингом";
  return (
    <div>
      <Popover>
        <PopoverTrigger className="inline-flex items-center gap-1 bg-gray-100 py-2 px-4 rounded-2xl font-bold">
          <ArrowUpDown size={16} />
          Сортировка: <span className="text-primary">{selectedSort}</span>
        </PopoverTrigger>
        <PopoverContent>
          {sortContent.map((sortItem) => (
            <p key={sortItem} className="cursor-pointer">
              {sortItem}
            </p>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
}
