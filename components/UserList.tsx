import { User } from "../types/User";

type Props = {
  users?: User[];
};

export default function UserList({ users }: Props) {
  console.log('Renderizando UserList com: ', users);

  if (!users || users.length === 0) {
    return <p className="text-red-500">Nenhum usuario encontrado!</p>
  }

  return (
    <ul className='grid md:grid-cols-2 gap-4'>
      {users.map((user, index) => (
        <li key={`${user.id} - ${index}`} className="bg-white border border-black mb-5 p-4 shadow rounded text-black">
          <p className="font-bold">{user.id}</p>
          <p className="font-bold">{user.name}</p>
          <p className="font-bold">{user.email}</p>
          {/* {user.phone &&<p className="font-bold">{user.phone}</p>} */}
        </li>
        // <li key={user.id} style={{ backgroundColor: 'white', border: '1px solid black', color: 'black', padding: '1rem' }}>
        //   <pre>{JSON.stringify(user, null, 2)}</pre>
        // </li>
      ))}
    </ul>

  );
}