import './resizable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import { useEffect, useState } from 'react';

interface ResizableProps {
    direction: 'horizontal' | 'vertical';
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;

    const [innerHeight, setInnerHeight] = useState(window.innerHeight);

    useEffect(() => {
        const listener = () => {
            console.log(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener);
        };
    }, []);

    if (direction === 'horizontal') {
        resizableProps = {
            className: 'resize-horizontal',
            minConstraints: [window.innerWidth * 0.2, Infinity],
            maxConstraints: [window.innerWidth * 0.75, Infinity],
            height: Infinity,
            width: window.innerWidth * 0.75,
            resizeHandles: ['e']
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
        <ResizableBox
            {...resizableProps}
        >
            {children}
        </ResizableBox>
    );
};

export default Resizable;