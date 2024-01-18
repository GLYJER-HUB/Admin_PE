import { apiCredentials } from "../utilities/api";

export const login = async (user) => {
    const response = await fetch(
        `${apiCredentials.BASE_URL}/auth/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            credentials: "include",
        }
    );
    return response;
};

export const logout = async () => {
    const response = await fetch(
        `${apiCredentials.BASE_URL}/auth/logout`,
        {
            method: "POST",
            credentials: "include",
        }
    );

    return response;
};
