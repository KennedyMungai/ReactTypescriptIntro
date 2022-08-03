import { useTypedSelector } from "../hooks/use-typed-selector";

useTypedSelector

const CellList: React.FC = () => {
    useTypedSelector((state) => state);

    return <div>Cell List</div>;
};

export default CellList;