'use client';

import { useEffect, useState } from 'react';
import { User } from '../../types/User';
import { getAllUsers, getUserById, createUser } from '../../services/userService';
import UserList from '../../components/UserList';
import ButtonGroup from '../../components/ButtonGroup';



export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const handleFetchAll = async () => {
    setLoading(true);
    const data = await getAllUsers();
    setUsers(data);
    setLoading(false);
  };

  const handleFetchById = async () => {
    const id = prompt("Digite o ID do usuário:");

    if (!id) return;

    setLoading(true);
    const user = await getUserById(id);
    setUsers(user? [user] : []);
    setLoading(false)
  };

  const handleCreateUser = async () => {
    const newUser = {
      name: "Teste",
      email: "testedeteste@teste.com",
      password: "123456",
    };
    await createUser(newUser);
    handleFetchAll();
  };

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-2xl font-bold mb-5'>Usuários</h1>
        <ButtonGroup
          onCreateUser={handleCreateUser}
          onFetchAll={handleFetchAll}
          onFetchById={handleFetchById}
        />
        {loading ? <p>Carregando...</p>: <UserList users={users}/>}
    </div>
  );
 
}
