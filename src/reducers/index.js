import { combineReducers } from 'redux';
import UserReducer from './user_reducer';

import CategoryReducer from './cat_reducer';
import ActiveCat from './active_cat_reducer'

//state mapping
//wire up reducer to use in view(react)
const rootReducer = combineReducers({
    users: UserReducer,
    categories: CategoryReducer,
    activeCat: ActiveCat
});

export default rootReducer;
