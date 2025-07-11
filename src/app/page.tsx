'use client';

import { useEffect, useState } from 'react';

import { User } from '../../types/User';
import { getAllUsers, getUserById,getUserByName, createUser } from '../../services/userService';
import UserList from '../../components/UserList';
import ButtonGroup from '../../components/ButtonGroup';
import UserForm from '../../components/UserForm';



export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleFetchAll = async () => {
    setLoading(true);
    setShowForm(false);

    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      alert("Erro ao buscar Usuários")
    } finally {
      setLoading(false);
    }
  };

  const handleFetchById = async () => {
    const id = prompt("Digite o ID do usuário:");

    if (!id) return;

    setLoading(true);
    setShowForm(false);
    try {
      const user = await getUserById(id);
      console.log("Usuario encontrado: ", user)
      setUsers(user ? [user] : []);
    } catch (error) {
      alert("Erro ao buscar Usuário");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchByName = async () => {
    const name = prompt("Digite o Nome do usuário:");

    if (!name) return;

    setLoading(true);
    setShowForm(false);

    try {
      const user = await getUserByName(name);
      console.log("Usuario encontrado: ", user)
      setUsers(user ? [user] : []);
    } catch (error) {
      alert("Erro ao buscar Usuário");
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };
  
  const handleCreateUser = async () => {
    setShowForm(true)
  };

  const handleSubmitForm = async (user: Omit<User, 'id'>) => {
    try {
      await createUser(user);
      setShowForm(false);
      await handleFetchAll();
    } catch (err) {
      alert("Erro ao criar usuário");
    }
  };

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-2xl text-center font-bold mb-5'>Usuários</h1>

      <div className='flex flex-row items-center justify-center justify-items-center'>
        <ButtonGroup
          onCreateUser={handleCreateUser}
          onFetchAll={handleFetchAll}
          onFetchById={handleFetchById}
          onFetchByName={handleFetchByName}
        />
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : showForm ? (
        <UserForm onSubmit={handleSubmitForm} onCancel={() => setShowForm(false)} />
      ) : (
        <UserList users={users} />
      )}

    </div>
  );

}
