import React, { ReactNode } from 'react';

import styles from './player-block.module.scss';
import { Heading } from 'Components/heading';

class PlayerBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <div className={styles.body}>
                <div className={styles.player}>
                    <iframe width="100%" height="590" src="https://www.youtube.com/embed/srqqwuqzYMM" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                    />
                </div>
                <div className={styles.desc}>
                    <Heading size={6}>
                        В курс входит
                    </Heading>
                    <div className={styles.descItemList}>
                        <div className={styles.descItem}>
                            <b>8</b> уроков
                        </div>
                        <div className={styles.descItem}>
                            <b>2</b> часа видео
                        </div>
                        <div className={styles.descItem}>
                            <b>10</b> заданий
                        </div>
                        <div className={styles.descItem}>
                            <b>4</b> теста
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerBlock;
