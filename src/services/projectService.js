import { apiCredentials } from "../utilities/api";

export const fetchProject = async () => {
    const response = await fetch(`${apiCredentials.BASE_URL}/projects`);
    return response;
}


export const deleteProject = async (id) => {
    const response = await fetch(
        `${apiCredentials.BASE_URL}/projects/delete/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        }
    );
    return response;
}