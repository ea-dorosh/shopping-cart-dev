import React from 'react';
import classes from './Button.module.scss'

export type ButtonType = {
    text: string
    handler?: () => void
    type: 'submit' | 'reset' | 'button'
    disabled?: boolean
}

const Button: React.FC<ButtonType> = ({handler, disabled, type, text}) => {
    return <button type={type} className={classes.quantityBtn} onClick={handler} disabled={disabled}>
        {text}
    </button>
}

export default Button
