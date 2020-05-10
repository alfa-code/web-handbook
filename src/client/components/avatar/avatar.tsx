import React from 'react';

import { Props } from './props';

export const Avatar = ({ src }: Props): JSX.Element => {
    return (
        <img src={src} alt={'Avatar'}/>
    );
};
