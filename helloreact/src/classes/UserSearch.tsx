import { throws } from "assert";
import { Component } from "react";
import { NumberLiteralType } from "typescript";

interface User {
    name: string;
    age: number;
}

interface UserSearchProps{
    Users: User[]
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name:'',
        user:undefined
    };

    onClick = () => {
        const foundUser = this.props.Users.find((user) => {
            return user.name === this.state.name;
        });

        this.setState({user: foundUser});
    }

    render() {
        const { name, user } = this.state;

        return (
        <div>
            <h3>User Search</h3>
            <input type="text" value={name} onChange={e => this.setState({name: e.target.value})} />
            <button onClick={this.onClick}>Find User</button>
            
            <div>
                <p>{user && user.name}</p>
                <p>{user && user.age}</p>
            </div>
        </div>
        );
    }
}

export default UserSearch;