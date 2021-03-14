import {productsReducer} from "./index";
import {ActionCreator} from "../../actions/products";

const testData = [{id: 22, name: 'Product name', price: 100, quantity: 1}]
const error = new Error('network error')

it(`Reducer without additional parameters should return initial state`, () => {
    expect(productsReducer(void 0, {type: '', payload: null})).toEqual({
        data: [],
        isLoading: false,
        error: null,
    });
});


it(`Reducer request products `, () => {
    expect(productsReducer({
            data: [],
            isLoading: false,
            error: null,
        },
        ActionCreator.fetchProductsRequest()
    )).toEqual({
        data: [],
        isLoading: true,
        error: null,
    });
});

it(`Reducer success products `, () => {
    expect(productsReducer({
            data: [],
            isLoading: false,
            error: null,
        },
        ActionCreator.fetchProductsSuccess(testData)
    )).toEqual({
        data: testData,
        isLoading: false,
        error: null,
    });
});

it(`Reducer failure products `, () => {
    expect(productsReducer({
            data: [],
            isLoading: false,
            error: null,
        },
        ActionCreator.fetchProductsFailure(error)
    )).toEqual({
        data: [],
        isLoading: false,
        error: error,
    });
});

