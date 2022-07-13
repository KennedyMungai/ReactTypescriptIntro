import {ChildAsFC} from './Child';

const Parent = () => {
    return (
        <ChildAsFC color='Red' onClick={() => console.log('Clicked')}>
                Shapoopie
        </ChildAsFC>
    );
};

export default Parent;