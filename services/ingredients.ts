import { Ingredients } from "@prisma/client";
import { api } from "./config";
import { ApiRoutes } from "./constants";

export const getAll = async () => {
  return await api.get<Ingredients[]>(ApiRoutes.INGREDIENTS).json();
};
