import { apiCredentials } from "../utilities/api";

export const fetchUserlogs = async () => {
  const response = await fetch(`${apiCredentials.BASE_URL}/logs`, {
    credentials: "include",
  });
  return response;
};
