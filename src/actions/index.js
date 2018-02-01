import axios from 'axios';
import gamesData from '../api/games';

import { FETCH_USERS } from './type';
import { FETCH_CAT } from './type';
import { ACTIVE_CAT } from './type';
import { ACTIVE_GAME } from './type';

// action creator care craeza o actiune (obiect) cu type si data
//https://jsonplaceholder.typicode.com/users
export function fetchUser(){
    //axios returns a promise
    const request = axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        type: FETCH_USERS,
        payload: request
    }
}

export function fetchCat(){
    const CAT_DATA = gamesData();
    return {
        type: FETCH_CAT,
        payload: CAT_DATA
    }
}

export function activeCat(a = null){
/*    console.log(a)*/
    return {
        type: ACTIVE_CAT,
        payload: a
    }
}

export function activeGame(game){
    return {
        type: ACTIVE_GAME,
        payload: game
    }
}

