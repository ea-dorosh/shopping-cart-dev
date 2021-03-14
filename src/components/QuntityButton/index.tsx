import React from 'react';
import classes from './QuantityButton.module.scss'

export type QuantityButtonType = {
    handler: () => void
    quantityType: 'increase' | 'decrease'
    disabled?: boolean
}

const QuantityButton: React.FC<QuantityButtonType> = ({handler, quantityType, disabled}) => {
    return <button type='button' className={classes.quantityBtn} onClick={handler} disabled={disabled}>
        <span className='visually-hidden'>{quantityType} product amount</span>
        {quantityType === 'increase' ? '+' : '-'}
    </button>
}

export default QuantityButton
