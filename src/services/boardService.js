import { apiCredentials } from "../utilities/api";

export const fetchStatistics = async () => {
  const response = await fetch(`${apiCredentials.BASE_URL}/statistics`, {
    credentials: "include",
  });
  return response;
};
