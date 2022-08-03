import { useTypedSelector } from "../hooks/use-typed-selector";

useTypedSelector

const CellList: React.FC = () => {
    useTypedSelector(({cells: {order, data}}) => {
        return order.map(() => {
            
        })
    });

    return <div>Cell List</div>;
};

export default CellList;