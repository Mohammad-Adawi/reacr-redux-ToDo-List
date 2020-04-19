import { combineReducers } from 'redux';
import { TodoState} from './types';
import {  todoReducer as todos } from './reducers';

export interface StoreState {
    todos: TodoState;
}

export default combineReducers<StoreState>({
    todos
});