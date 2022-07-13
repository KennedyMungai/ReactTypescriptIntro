interface ChildProps {
    color: string;
}

export const Child = ({ color }: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me!!!</button>
        </div>
};

export const ChildAsFC: React.FC<ChildProps> = ({color}) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me</button>
        </div>;
};

ChildAsFC.displayName