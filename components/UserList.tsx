import { User } from "../types/User";

type Props = {
  users?: User[];
};

export default function UserList({ users }: Props) {
  if (!users || users.length === 0) {
    return <p className="text-red-500">Nenhum usuario encontrado!</p>
  }
  return (
    <ul className='grid md:grid-cols-2 gap-4'>
      {users.map((user) => (
        <li key={user.id} className="bg-gray-400 mb-5 p-4 shadow rounded text-black">
          <p>{user.id}</p>
          <p><strong>{user.name}</strong></p>
          <p>{user.email}</p>
          {user.phone && <p>{user.phone}</p>}
        </li>
      ))}
    </ul>

  );
}