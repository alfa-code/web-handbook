import React, { useEffect, useState } from 'react';

import { Spinner } from 'Components/spinner/spinner';

import styles from './player.module.scss';

export const Player = (props) => {
    const { src } = props;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)
    }, [])

    let content = <Spinner />;

    if (!loading) {
        content = (
            <iframe
                className={styles.iframe}
                height="590"
                src={ src }
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        )
    }

    return (
        content
    )
};

export const MemoizedPlayer = React.memo(Player);
