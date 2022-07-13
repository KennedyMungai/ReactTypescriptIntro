import {Child} from './Child';

const Parent = () => {
    return <Child color='Red' onClick={() => console.log('Clicked')}/>
};

export default Parent;