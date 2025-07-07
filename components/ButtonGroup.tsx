type Props = {
    onFetchAll: () => void;
    onFetchById: () => void;
    onCreateUser: () => void;
}

export default function ButtonGroup({ onFetchAll, onFetchById, onCreateUser }: Props) {
    return (
        <div className="flex gap-4 mb-6 ">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover: cursor-pointer" onClick={onCreateUser}>
                Adicionar
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover: cursor-pointer" onClick={onFetchAll}>
                Buscar Todos
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover: cursor-pointer" onClick={onFetchById}>
                Buscar por Usuario
            </button>
        </div>
    )
}