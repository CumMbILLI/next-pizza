"use client";

import { ChangeEvent, useState } from "react";
import { Input } from "../ui";
import { CheckboxComponent } from "./checkbox-component";
import { Title } from "./title";

interface Props<T> {
  title: string;
  items: T[];
  limit?: number;
  selected?: Set<number | string>;
  searchInputPlaceholder?: string;
  isShowSearchInput?: boolean;
  onChangeCheckbox?: (value: number | string) => void;
  className?: string;
}

export function CheckboxGroup<T extends { id: number | string; name: string }>({
  title,
  items,
  limit,
  searchInputPlaceholder = "Поиск...",
  isShowSearchInput = false,
  className,
  selected,
  onChangeCheckbox,
}: Props<T>) {
  const [searchValue, setSearchValue] = useState("");
  const [isShowAll, setIsShowAll] = useState(false);

  const list = isShowAll
    ? items.filter((item) =>
        item.name?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : limit
    ? items.slice(0, limit)
    : items;

  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={className}>
      <Title size="xs">{title}</Title>

      {isShowAll && isShowSearchInput && (
        <Input
          value={searchValue}
          onChange={onChangeSearchInput}
          className="bg-gray-100 border-0"
          placeholder={searchInputPlaceholder}
        />
      )}

      <ul className="space-y-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item) => (
          <CheckboxComponent
            key={item.name}
            {...item}
            checked={selected?.has(String(item.id))}
            onCheckedChange={onChangeCheckbox}
          />
        ))}
      </ul>

      {limit && items.length > limit && (
        <button
          className="text-primary"
          onClick={() => setIsShowAll((prev) => !prev)}
        >
          {isShowAll ? "Скрыть" : "+ Показать всё"}
        </button>
      )}
    </div>
  );
}
