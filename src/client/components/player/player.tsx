import React, { useEffect, useState } from 'react';

import { Spinner } from 'Components/spinner/spinner';

import styles from './player.module.scss';

export const Player = () => {
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
                src="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG"
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
