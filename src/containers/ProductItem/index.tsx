import React from 'react';
import classes from './ProductItem.module.scss'
import QuantityButton from "components/QuntityButton";
import {useDispatch} from "react-redux";
import {Operation} from "actions/products";

export type ProductType = {
    id: number,
    name: string,
    price: number | null,
    quantity: number,
}

const ProductItem: React.FC<ProductType> = ({name, price, quantity, id}) => {
    const dispatch = useDispatch();

    return <li className={classes.card}>
        <div className={classes.imgWrapper}/>
        <div className={classes.cardWrapper}>
            <h4 className={classes.name}>{name}</h4>
            <span className={classes.price}>{price}$</span>
            <div className={classes.quantityWrapper}>
                <QuantityButton handler={()=>dispatch(Operation.decreaseAmount(id))} quantityType='decrease' disabled={quantity === 1}/>
                <span className={classes.quantity}>{quantity}</span>
                <QuantityButton handler={()=>dispatch(Operation.increaseAmount(id))} quantityType='increase'/>
            </div>
        </div>
        <button onClick={()=>dispatch(Operation.removeProduct(id))} className={classes.deleteBtn}><span className='visually-hidden'>delete item from cart</span></button>
    </li>
}

export default ProductItem
