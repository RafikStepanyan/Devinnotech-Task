import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    arrCat: [],
    arrCategories: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'loadCat':
            return {
                ...state,
                arrCat: [...action.payload]
            };
        case 'loadCategories':
            return {
                ...state,
                arrCategories: [...action.payload]
            };
        case 'loadMore':
            return {
                ...state,
                arrCat: [...state.arrCat, ...action.payload]
            };
        default:
            return state;
    }
};

export const store = createStore(reducer, applyMiddleware(thunk));