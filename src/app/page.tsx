'use client';

import { useEffect, useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone?: string | null;
}


export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        const data = await response.json();

        console.log("Usuarios recebidos", data);

        if(Array.isArray(data)) {
          setUsers(data);
        }else {
          console.log("A resposta não é um Array:", data)
        }
      } catch (error) {
        console.error("A resposta não é um Array:", error)
      } finally {
        setLoading(false);
      }

    }
  }, []);


  if (loading) return <h3>Carregando...</h3>;
  
  return (
    <div>
      <h1>Lista de Usuários consumidos da api criada</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
