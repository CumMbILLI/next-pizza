import { api } from "./config";
import { Product } from "@prisma/client";
import { ApiRoutes } from "./constants";

export const getSearchProduct = async (param: string) => {
  return await api
    .get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, {
      searchParams: { query: param },
    })
    .json();
};
