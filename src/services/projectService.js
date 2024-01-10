import { apiCredentials } from "../utilities/api";

export const fetchProject = async () => {
    const response = await fetch(`${apiCredentials.BASE_URL}/projects`);
    return response;
}

export const fetchProjectById = async (id) => {
    const response = await fetch(`${apiCredentials.BASE_URL}/projects/id/${id}`);
    return response;
}

export const addProject = async (data) => {
    const response = await fetch(
        `${apiCredentials.BASE_URL}/projects/`,
        {
            method: "POST",
            body: data,
            credentials: "include",
        }
    );
    return response;
}

export const updateProject = async (data, id) => {
    const response = await fetch(`${apiCredentials.BASE_URL}/projects/${id}`, {
        method: "PUT",
        body: data,
        credentials: "include",
    });
    return response;
};

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