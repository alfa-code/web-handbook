import React from 'react';

import styles from './tag.pcss';

interface Props {
    tagName: string;
}

export function Tag(props: Props) {
    const { tagName } = props;

    return (
        <span className={ styles.tag }>
            { tagName }
        </span>
    );
}
