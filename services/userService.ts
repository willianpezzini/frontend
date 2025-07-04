import { User } from "../types/User";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAllUsers(): Promise<User[]> {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    return data || [];
}

export async function getUserById(id: string): Promise<User> {
    const response = await fetch(`${API_URL}/users/:${id}`);
    return response.json();
}

export async function createUser(newUser:Partial<User>): Promise<User> {
    const response = await fetch(`${API_URL}/users`, {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
    });
    return response.json();
}