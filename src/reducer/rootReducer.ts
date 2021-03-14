import {combineReducers} from 'redux';
import {productsReducer} from 'reducer/products';

export const rootReducer = combineReducers({
  products: productsReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>


