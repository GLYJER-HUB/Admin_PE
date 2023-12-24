import { apiCredentials } from "../utilities/api";

export const fetchUser = async () => {
    const response = await fetch(
        `${apiCredentials.BASE_URL}/users`,
        {
            credentials: "include",
        }
    );
    return response;
}