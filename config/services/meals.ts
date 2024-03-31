import { requestApi } from "../Api";

export const getRandomMeal = async () => {
  try {
    const data = await requestApi("/random.php");
    return data?.meals || [];
  } catch (error) {
    return [];
  }
};
