import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from "actions/actionTypes";
import {ProductType} from "containers/ProductItem";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {AppStateType} from "reducer/rootReducer";


interface FetchProductsRequest {
    type: typeof FETCH_PRODUCTS_REQUEST,
    payload: null
}

interface FetchProductsSuccess {
    type: typeof FETCH_PRODUCTS_SUCCESS
    payload: Array<ProductType>
}

interface FetchProductsFailure {
    type: typeof FETCH_PRODUCTS_FAILURE
    payload: object
}

export type ProductsActionTypes = FetchProductsRequest | FetchProductsSuccess | FetchProductsFailure

export const ActionCreator = {
    fetchProductsRequest: (): ProductsActionTypes => ({
        type: FETCH_PRODUCTS_REQUEST,
        payload: null
    }),
    fetchProductsSuccess: (products: Array<ProductType>): ProductsActionTypes => ({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products,
    }),
    fetchProductsFailure: (error: object): ProductsActionTypes => ({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    })
}


export const Operation = {
    fetchProducts: (): ThunkAction<void, AppStateType, unknown, Action<string>> => async (dispatch) => {
        try {
            dispatch(ActionCreator.fetchProductsRequest());
            const response = await fetch('http://my-json-server.typicode.com/ea-dorosh/mockjson/products')
            const json = await response.json();
            dispatch(ActionCreator.fetchProductsSuccess(json));
        } catch (error) {
            dispatch(ActionCreator.fetchProductsFailure(error.response.data));
        }
    },
    removeProduct: (id: number): ThunkAction<void, AppStateType, unknown, Action<string>> => (dispatch, getState: any) => {
        const {products: {data}} = getState()
        const updatedProducts: Array<ProductType> = data.filter((product: ProductType) => product.id !== id)
        dispatch(ActionCreator.fetchProductsSuccess(updatedProducts))
    },
    increaseAmount: (id: number): ThunkAction<void, AppStateType, unknown, Action<string>> => (dispatch, getState: any) => {
        const {products: {data}} = getState()
        const updatedProducts: Array<ProductType> = data.map((product: ProductType) => {
            if (product.id === id) {
                product.quantity++
            }
            return product
        })
        dispatch(ActionCreator.fetchProductsSuccess(updatedProducts))
    },
    decreaseAmount: (id: number): ThunkAction<void, AppStateType, unknown, Action<string>> => (dispatch, getState: any) => {
        const {products: {data}} = getState()
        const updatedProducts: Array<ProductType> = data.map((product: ProductType) => {
            if (product.id === id) {
                product.quantity--
            }
            return product
        })
        dispatch(ActionCreator.fetchProductsSuccess(updatedProducts))
    },
    addProduct: (product: ProductType): ThunkAction<void, AppStateType, unknown, Action<string>> => async (dispatch, getState: any) => {
        const {products: {data}} = getState();
        const updatedProducts: Array<ProductType> = []
        updatedProducts.push(product)
        data.forEach((product: ProductType) => updatedProducts.push(product))
        dispatch(ActionCreator.fetchProductsSuccess(updatedProducts))
    }
}
