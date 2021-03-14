import React from 'react';
import classes from './Input.module.scss';

export type InputType = {
    labelText: string,
    defaultValue: string | number,
    name: string,
    handler: (evt: React.ChangeEvent<HTMLInputElement>) => void,
    pattern?: string
}

const Input: React.FC<InputType> = ({labelText,
                                        defaultValue,
                                        name,
                                        handler,
                                        pattern}) => {

    return <div className={classes.inputBox}>
        <label className={classes.inputLabel}>{labelText}</label>
        <input name={name}
               type='text'
               className={classes.inputElement}
               value={defaultValue}
               onChange={(evt)=>handler(evt)}
               pattern={pattern}
        />
    </div>
}

export default Input
