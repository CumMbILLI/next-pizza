"use client";

import { ChangeEvent, useState } from "react";
import { Input } from "../ui";
import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Title } from "./title";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  selectedIds?: Set<string>;
  onClickCheckbox?: (value: string) => void;
  loading?: boolean;
  name?: string;
}

export function CheckboxGroup({
  title,
  items,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  selectedIds,
  onClickCheckbox,
  loading,
  name,
}: Props) {
  const [searchValue, setSearchValue] = useState("");
  const [showAll, setShowAll] = useState(false);

  const list = showAll
    ? items.filter((item) =>
        item.text?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
    : items.slice(0, limit);

  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={className}>
      <Title size="xs">{title}</Title>

      {showAll && (
        <Input
          value={searchValue}
          onChange={onChangeSearchInput}
          className="bg-gray-100 border-0"
          placeholder={searchInputPlaceholder}
        />
      )}

      <ul className="space-y-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item) => (
          <FilterCheckbox
            key={item.value}
            {...item}
            onCheckedChange={(item) => console.log(item)}
          />
        ))}
      </ul>

      {items.length > limit && (
        <button
          className="text-primary"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Скрыть" : "+ Показать всё"}
        </button>
      )}
    </div>
  );
}
