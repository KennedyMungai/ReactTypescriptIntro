import {Child} from './Child';

const Parent = () => {
    return <Child color='Red' onClick={() => console.log('Clicked')}>
            
    </Child>
};

export default Parent;