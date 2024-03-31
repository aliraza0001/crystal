// config/Api.ts url from .env file
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const requestApi = async (
  path: string,
  options?: RequestInit
): Promise<any> => {
  const response = await fetch(`${BASE_URL}${path}`, options);
  const data = await response.json();
  return data;
};
