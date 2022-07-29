import './resizable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';

interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;

    if (direction === 'horizontal') {
        resizableProps = {

        };
    } else {
        resizableProps = {
            minConstraints: [Infinity, window.innerHeight * 0.2],
            maxConstraints: [Infinity, window.innerHeight * 0.9],
            height: 300,
            width: Infinity,
            resizeHandles: ['s']
        };
    }

    return (
        <ResizableBox>
            {children}
        </ResizableBox>
    );
};

export default Resizable;