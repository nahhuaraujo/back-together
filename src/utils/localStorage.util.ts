export const setLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};

export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
