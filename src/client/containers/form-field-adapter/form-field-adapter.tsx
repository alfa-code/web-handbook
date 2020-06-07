import React from 'react';
import { Shape } from 'Types/objects';

const emptyFunc = (...args: any) => void { ...args};

export const formFieldAdapter =
    ({
         placeholder,
         onFocus = emptyFunc,
         onBlur = emptyFunc,
         onChange = emptyFunc,
         component = undefined
     }) => ({
                input: {
                    onBlur: inputBlur = emptyFunc,
                    onFocus: inputFocus = emptyFunc,
                    onChange: inputChange = emptyFunc
                },
                meta: {
                    error,
                    touched
                }
            }: Shape<any>) => {
        const RenderComponenet = component;

        return (
            <RenderComponenet
                className='form-body-input'
                placeholder={ placeholder }
                size='full'
                error={ Array.isArray(error) ? error[0]?.message : error?.message }
                touched={ touched }
                onChange={ (...args) => {
                    onChange(...args);
                    inputChange(...args);
                } }
                onFocus={ (...args) => {
                    onFocus(...args);
                    inputFocus(...args);
                } }
                onBlur={ (...args) => {
                    onBlur(...args);
                    inputBlur(...args);
                } }
            />
        )
    };
