import { Api } from "@/services/api-client";

import { Title } from "../title";

import { FiltersGroup } from "./filters-group";

export async function Filters() {
  const ingredients = await Api.ingredients.getAll();

  return (
    <nav className="w-[240px]">
      <Title>Фильтрация</Title>

      <FiltersGroup ingredients={ingredients} />
    </nav>
  );
}
