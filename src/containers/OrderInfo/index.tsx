import React from 'react';
import classes from './OrderInfo.module.scss'
import {ProductType} from "../ProductItem";

export type OrderInfoType = {
    products: Array<ProductType>
}

const OrderInfo: React.FC<OrderInfoType> = ({products}) => {

    const productsQuantity: number = products.reduce((sum: number, current: ProductType) => {
        return sum + current.quantity
    }, 0)

    const productsPrice: number = products.reduce((sum: number, current: ProductType) => {
        // @ts-ignore
        return sum + current.quantity * current.price
    }, 0)

    const shippingPrice = 25
    const totalAmount = productsPrice + shippingPrice;

    return <>
        <h3 className={classes.infoTitle}>Order Information</h3>
        <table className={classes.table}>
            <tbody>
            <tr>
                <td>Products in the order</td><td>{productsQuantity}pcs</td>
            </tr>
            <tr>
                <td>Products Price</td><td>{productsPrice}$</td>
            </tr>
            <tr>
                <td className={classes.lastRow}>Shipping</td><td>{shippingPrice}$</td>
            </tr>
            <tr>
                <td className={classes.total}>Total</td><td className={classes.total}>{totalAmount}$</td>
            </tr>
            </tbody>
        </table>
    </>
}

export default OrderInfo
