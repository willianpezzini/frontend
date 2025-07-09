import { User } from "../types/User";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAllUsers(): Promise<User[]> {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    return data.data;
}

export async function getUserById(id: string): Promise<User> {
    const response = await fetch(`${API_URL}/users/${id}`);

    if (!response.ok) {
        throw new Error("Erro ao buscar usuário");
    }

    const json = await response.json();
    return json.data;
}

export async function createUser(newUser:Partial<User>): Promise<User> {
    const response = await fetch(`${API_URL}/users`, {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
    });
    return response.json();
}