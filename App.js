```javascript
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import UserComponent from './UserComponent';
import ContentComponent from './ContentComponent';

class App extends Component {
    state = {
        users: [],
        contents: []
    }

    componentDidMount() {
        this.fetchUsers();
        this.fetchContents();
    }

    fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            this.setState({ users: response.data });
        } catch (err) {
            console.error(err);
        }
    }

    fetchContents = async () => {
        try {
            const response = await axios.get('/api/contents');
            this.setState({ contents: response.data });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/users" render={() => <UserComponent users={this.state.users} />} />
                        <Route path="/contents" render={() => <ContentComponent contents={this.state.contents} />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
```

