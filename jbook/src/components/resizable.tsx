import './resizable.css';
import { ResizableBox } from 'react-resizable';

interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}

let resizableProps;

if (direction === 'horizontal') {
    resizableProps = {

    };
} else {
    resizableProps = {

    };
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    return (
        <ResizableBox
            minConstraints={[Infinity, window.innerHeight * 0.2]}
            maxConstraints={[Infinity, window.innerHeight * 0.9]}
            height={300}
            width={Infinity}
            resizeHandles={['s']}
        >
            {children}
        </ResizableBox>
    );
};

export default Resizable;