export async function getUsers() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);

    if (!response.ok) {
        throw new Error ('Erro ao buscar Usuários');
    }

    const data = await response.json();
    console.log("Dados Recebidos:", data);
    return data;
}