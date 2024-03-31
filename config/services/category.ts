import { CategoryCardProps } from "@/types";
import { requestApi } from "../Api";

export const getCategoryDetails = async (category: string) => {
  try {
    const data = await requestApi(`/filter.php?c=${category}`);
    return data.meals || [];
  } catch (error) {
    return [];
  }
};

export const getCategories = async (): Promise<CategoryCardProps[]> => {
  try {
    const data = await requestApi("/categories.php");
    return data?.categories || [];
  } catch (error) {
    return [];
  }
};
