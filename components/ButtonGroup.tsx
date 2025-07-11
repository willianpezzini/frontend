type Props = {
    onFetchAll: () => void;
    onFetchById: () => void;
    onFetchByName: () => void;
    onCreateUser: () => void;
}

export default function ButtonGroup({ onFetchAll, onFetchById, onFetchByName, onCreateUser }: Props) {
    return (
        <div className="flex p-5 gap-4 mb-6">
            <button className="bg-green-500 text-white px-4 py-2 rounded transition-colors hover:bg-green-600 hover: cursor-pointer" onClick={onCreateUser}>
                Adicionar
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded transition-colors hover:bg-blue-600 hover: cursor-pointer" onClick={onFetchAll}>
                Buscar Todos
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded transition-colors hover:bg-blue-600 hover: cursor-pointer" onClick={onFetchById}>
                Buscar pelo Id
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded transition-colors hover:bg-blue-600 hover: cursor-pointer" onClick={onFetchByName}>
                Buscar pelo Nome
            </button>
        </div>
    )
}