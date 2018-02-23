import React, { Component } from 'react';
import UserList from './register/user-components/user_list';

import Layout from './layout/layout';
import Casino from './casino/game-components/index';

// implemented <UserList />
export default class App extends Component {
  render() {
    return (
        <Layout>
            { this.props.children }
        </Layout>
    );
  }
};

