```javascript
import React, { Component } from 'react';
import axios from 'axios';

class UserComponent extends Component {
    state = {
        newUser: {
            username: '',
            email: '',
            password: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                [event.target.name]: event.target.value
            }
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/api/users', this.state.newUser);
            this.props.fetchUsers();
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.newUser.username}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.newUser.email}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.newUser.password}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Create User</button>
                </form>
                <ul>
                    {this.props.users.map(user => (
                        <li key={user._id}>
                            <h2>{user.username}</h2>
                            <p>Email: {user.email}</p>
                            <p>Progress: {user.progress}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UserComponent;
```

