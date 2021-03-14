import React, {useEffect} from 'react';
import classes from './App.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "reducer/rootReducer";
import {Operation} from "actions/products";
import ProductList from "containers/ProductList";
import OrderInfo from "containers/OrderInfo";
import AddProductForm from "../AddProductForm";

const App: React.FC = () => {

    // @ts-ignore
    const products = useSelector((state: AppStateType) => state.products.data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Operation.fetchProducts())
    }, [dispatch])

    return (
        <div className={classes.page}>
            <h1 className='visually-hidden'>Shopping Cart</h1>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>My Cart ({products?.length}<span className='visually-hidden'>pcs in cart</span>)</h2>
                <div className={classes.inner}>
                    <ProductList products={products} />
                    <div>
                        <AddProductForm />
                        <div className={classes.orderInfo}>
                            <OrderInfo products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
