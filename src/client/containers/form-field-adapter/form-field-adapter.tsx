import React from 'react';
import { Shape } from 'Types/objects';
import { InputSimple } from 'Components/input-simple';
import { AnyFunction } from 'Types/functions';

const emptyFunc = (...args: any) => void { ...args};

type FieldAdapterOptions = Partial<{
    placeholder: string;
    onFocus: AnyFunction;
    onBlur: AnyFunction;
    onChange: AnyFunction;
    component: React.ComponentClass<any> | React.FC<any>;
}>;

export const formFieldAdapter =
    ({
         placeholder,
         onFocus = emptyFunc,
         onBlur = emptyFunc,
         onChange = emptyFunc,
         component = InputSimple
     }: FieldAdapterOptions) => ({
                input: {
                    onBlur: inputBlur = emptyFunc,
                    onFocus: inputFocus = emptyFunc,
                    onChange: inputChange = emptyFunc,
                    value,
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
                value={value}
            />
        )
    };
