import React from 'react';
import classes from './ProductList.module.scss'
import ProductItem, {ProductType} from "containers/ProductItem";

export type ProductsListType = {
    products: Array<ProductType>
}

const ProductList: React.FC<ProductsListType> = ({products}) => {

    return <ul className={classes.list}>
        {products.map((product: ProductType) => <ProductItem  key={product.id} id={product.id} name={product.name} price={product.price} quantity={product.quantity} />)}
    </ul>
}

export default ProductList
