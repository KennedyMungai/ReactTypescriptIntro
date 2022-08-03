import { useTypedSelector } from "../hooks/use-typed-selector";

useTypedSelector

const CellList: React.FC = () => {
    useTypedSelector(({cells: {order, data}}) => {
        return order.map((id) => {
            
        })
    });

    return <div>Cell List</div>;
};

export default CellList;