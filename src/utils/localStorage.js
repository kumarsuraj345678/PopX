import { STORAGE_KEYS } from "./storageKeys";

export const saveUser = (user) => {
  const users =
    JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];

  users.push(user);

  localStorage.setItem(
    STORAGE_KEYS.USERS,
    JSON.stringify(users)
  );
};

export const getUsers = () => {
  return (
    JSON.parse(
      localStorage.getItem(STORAGE_KEYS.USERS)
    ) || []
  );
};