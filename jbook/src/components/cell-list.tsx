import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";

useTypedSelector

const CellList: React.FC = () => {
    const cells = useTypedSelector(({ cells: { order, data } }) =>
        order.map((id) =>
            data[id]
        )
    );

    const renderedCells = cells.map(cell => <CellListItem cell={cell} />)

    return <div>Cell List</div>;
};

export default CellList;