import { Button, Input, RangeSlider } from "../ui";
import { CheckboxGroup } from "./checkbox-group";
import { FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";

const MOCK_FILTERS = [
  {
    text: "Сырный соус",
    name: "cheese-sauce",
    value: "1",
  },
  {
    text: "Моцарелла",
    name: "mozzarella",
    value: "2",
  },
  {
    text: "Чеснок",
    name: "garlic",
    value: "3",
  },
  {
    text: "Солённые огурчики",
    name: "pickled-cucumbers",
    value: "4",
  },
  {
    text: "Красный лук",
    name: "red-onion",
    value: "5",
  },
  {
    text: "Томаты",
    name: "tomatoes",
    value: "6",
  },
  {
    text: "Сырный соус",
    name: "cheese-sauce-2",
    value: "7",
  },
  {
    text: "Моцарелла",
    name: "mozzarella-2",
    value: "8",
  },
  {
    text: "Чеснок",
    name: "garlic-2",
    value: "9",
  },
  {
    text: "Солённые огурчики",
    name: "pickled-cucumbers-2",
    value: "10",
  },
  {
    text: "Красный лук",
    name: "red-onion-2",
    value: "11",
  },
  {
    text: "Томаты",
    name: "tomatoes-2",
    value: "12",
  },
];

export function Filters() {
  return (
    <nav className="w-[240px]">
      <Title>Фильтрация</Title>
      <div className="py-7 space-y-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="pt-7 pb-14 border-y border-y-neutral-100 space-y-4">
        <Title size="xs">Цена от и до:</Title>

        <div className="flex gap-4">
          <Input type="number" placeholder="0" min={0} max={5000} />
          <Input type="number" placeholder="5000" min={100} max={5000} />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxGroup
        className="py-8 space-y-4"
        title="Ингредиенты:"
        limit={5}
        items={MOCK_FILTERS}
      />
      <Button className="w-full">Применить</Button>
    </nav>
  );
}
