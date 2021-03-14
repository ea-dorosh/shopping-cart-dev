import {
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
} from "actions/actionTypes";
import {ProductsActionTypes} from "actions/products";
import {ProductType} from "containers/ProductItem";

interface IProductState {
    data: Array<ProductType>
    isLoading: boolean
    error: null | Object
}

const initialState: IProductState = {
    data: [],
    isLoading: false,
    error: null,
};

export const productsReducer = (state = initialState, action: ProductsActionTypes) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {...state, isLoading: true, error: null};
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, data: action.payload, isLoading: false};
        case FETCH_PRODUCTS_FAILURE:
            return {...state, error: action.payload, isLoading: false};
        default:
            return state;
    }
};
