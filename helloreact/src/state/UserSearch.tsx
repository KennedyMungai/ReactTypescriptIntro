import { useState } from "react";

const Users = [
    {name: "Sarah", age:20},
    {name: "Alex", age:20},
    {name: "Michael", age:20}
];


const UserSearch:React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState();

    const onClick = () => {
        const foundUser = Users.find((user) => {
            return user.name === name;
        });

        console.log(foundUser);
    };

    return(
        <div>
            <h3>User Search</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={onClick}>Find User</button>
        </div>
    );
};

export default UserSearch;