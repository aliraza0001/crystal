export const getItem = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) as string);
  } catch (e) {
    return null;
  }
};

export const setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};
