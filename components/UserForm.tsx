'use client';

import { useState } from "react";
import { User } from "../types/User";


type Props = {
    onSubmit: (user: Omit<User, 'id'>) => void;
    onCancel: () => void;
};

export default function UserForm({ onSubmit, onCancel }: Props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({ name, email, password, phone })
    };


    return (
        <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded max-w-md mx-auto mt-6">
            <h2 className="text-xl font-bold mb-4">Cadastrar Novo Usuário</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Nome</label>
                <input 
                    type="text"
                    className="w-full border px-2 rounded"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                />
            </div>

             <div className="mb-4">
                <label className="block text-sm font-medium mb-1">E-mail</label>
                <input 
                    type="email"
                    className="w-full border px-2 rounded"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>

             <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Senha</label>
                <input 
                    type="password"
                    className="w-full border px-2 rounded"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </div>

             <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Telefone</label>
                <input 
                    type="phone"
                    className="w-full border px-2 rounded"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
            </div>

            <div className="flex justify-around">
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer">
                    Salvar
                </button>

                <button type="button" onClick={onCancel} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer">
                    Cancelar
                </button>
            </div>
        </form>
    );
};