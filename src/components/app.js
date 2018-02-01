import React, { Component } from 'react';
import UserList from './user-components/user_list';
import GamesCategoryList from './game-components/games_category_list';
import GamesCatChildrenGrid from './game-components/game_cat_children_grid';

import { Router, Route } from 'react-router'

// implemented <UserList />
export default class App extends Component {
  render() {
    return (
      <div className="Block">
            <GamesCategoryList />
            <GamesCatChildrenGrid />
      </div>
    );
  }
}

