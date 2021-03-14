import React, {useState} from 'react';
import classes from './AddProductForm.module.scss'
import Input from "components/Input";
import QuantityButton from "components/QuntityButton";
import {useDispatch} from "react-redux";
import {Operation} from "actions/products";
import {ProductType} from "containers/ProductItem";
import Button from "components/Button";
import {getRandomInRange} from "utils";

const AddProductForm: React.FC = () => {

    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState<ProductType>({
        id: getRandomInRange(1, 100),
        name: '',
        price: null,
        quantity: 1,
    })

    const [formError, setFormError] = useState<boolean>(false)

    const handleChange = (evt: any) => {
        const value = evt.target.value;
        if (evt.target.validity.valid) {
            setFormError(false)
            setFormValue({
                ...formValue,
                [evt.target.name]: value
            });
        }
    }

    const increaseAmount = () => {
        setFormValue({
            ...formValue,
            quantity: formValue.quantity + 1
        })
    }

    const decreaseAmount = () => {
        setFormValue({
            ...formValue,
            quantity: formValue.quantity - 1
        })
    }

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        if (formValue.name === '' || !formValue.price) {
            setFormError(true)
            return
        }
        dispatch(Operation.addProduct(formValue))
        setFormValue({
            id: getRandomInRange(1, 100),
            name: '',
            price: null,
            quantity: 1,
        })
    }

    return <div className={classes.wrapper}>
        <h3 className={classes.title}>Add New Product</h3>
        <form onSubmit={handleSubmit}>
            <Input name='name' labelText='Product Name' defaultValue={formValue.name} handler={handleChange} />
            <Input name='price' labelText='Product Price' defaultValue={!formValue.price ? '' : formValue.price} handler={handleChange} pattern="^-?[0-9]\d*\.?\d*$"/>
            <div className={classes.customInput}>
                <label className={classes.label} htmlFor='new-quantity'>Product Quantity</label>
                <QuantityButton handler={decreaseAmount} quantityType={'decrease'} disabled={formValue.quantity === 1}/>
                <input id='new-quantity' name='quantity' className={classes.input} value={formValue.quantity} readOnly tabIndex={-1}/>
                <QuantityButton handler={increaseAmount} quantityType={'increase'}/>
            </div>
            <div className={classes.btnWrapper}>
                <Button text='Add Product' type='submit' />
            </div>
        </form>
        {formError && <p className={classes.error}>Please fill all fields</p>}
    </div>
}

export default AddProductForm
