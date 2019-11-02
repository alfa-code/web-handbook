import React from 'react';

import styles from './link.pcss';

interface Props {
    children?: any;
    href?: string;
    type?: string;
}

export const LINK_TYPES = {
    text: 'text',
    phone: 'phone',
    email: 'email'
};

export function Link(props: Props) {
    const { children, href = '#', type = LINK_TYPES.text } = props;

    let prefix: string;

    switch (type) {
        case LINK_TYPES.text:
            prefix = '';
            break;
        case LINK_TYPES.phone:
            prefix = 'tel:';
            break;
        case LINK_TYPES.email:
            prefix = 'mailto:';
            break;
        default:
            prefix = '';
    }

    return (
        <a href={ prefix + href } className={ styles.link }>
            { children }
        </a>
    );
}
