import React from 'react';

import styles from './player-management.module.scss';
import triangleDown from 'Assets/icons/bw/triangle-down-small.svg';
import replayIcon from 'Assets/icons/info-icons/repeat.svg'
import shuffleIcon from 'Assets/icons/info-icons/shuffle.svg'
import savePlaylistIcon from 'Assets/icons/info-icons/save-playlist.svg'
import moreIcon from 'Assets/icons/info-icons/more.svg'

export const PlayerManagement = () => (
    <div className={styles.management}>
        <div className={styles.header}>
            <div>
                <div>
                    <div className={styles.title}>Основы JavaScript</div>
                    <div className={styles.videoTitle}>Javascript - JavaScript 1 видео из 9</div>
                </div>
                <img src={triangleDown} alt="" />
            </div>
            <div className={styles.icons}>
                <div>
                    <img src={replayIcon} alt="" />
                    <img src={shuffleIcon} alt="" />
                </div>
                <div>
                    <img src={savePlaylistIcon} alt="" />
                    <img src={moreIcon} alt="" />
                </div>
            </div>
        </div>
        <div className={styles.body}>
            <div className={styles.course}>
                <span className={styles.counter}>1</span>
                <div className={styles.image} />
                <div className={styles.courseTitle}>
                    Основы JavaScript #1 — Алексей Вечканов, Альфа Банк
                    <div className={styles.gray}>JavaScript</div>
                </div>
            </div>
            <div className={styles.course}>
                <span className={styles.counter}>2</span>
                <div className={styles.image} />
                <div className={styles.courseTitle}>
                    Основы JavaScript #1 — Алексей Вечканов, Альфа Банк
                    <div className={styles.gray}>JavaScript</div>
                </div>
            </div>
            <div className={styles.course}>
                <span className={styles.counter}>3</span>
                <div className={styles.image} />
                <div className={styles.courseTitle}>
                    Основы JavaScript #1 — Алексей Вечканов, Альфа Банк
                    <div className={styles.gray}>JavaScript</div>
                </div>
            </div>
            <div className={styles.course}>
                <span className={styles.counter}>4</span>
                <div className={styles.image} />
                <div className={styles.courseTitle}>
                    Основы JavaScript #1 — Алексей Вечканов, Альфа Банк
                    <div className={styles.gray}>JavaScript</div>
                </div>
            </div>
            <div className={styles.course}>
                <span className={styles.counter}>5</span>
                <div className={styles.image} />
                <div className={styles.courseTitle}>
                    Основы JavaScript #1 — Алексей Вечканов, Альфа Банк
                    <div className={styles.gray}>JavaScript</div>
                </div>
            </div>
            <div className={styles.course}>
                <span className={styles.counter}>6</span>
                <div className={styles.image} />
                <div className={styles.courseTitle}>
                    Основы JavaScript #1 — Алексей Вечканов, Альфа Банк
                    <div className={styles.gray}>JavaScript</div>
                </div>
            </div>
            <div className={styles.course}>
                <span className={styles.counter}>7</span>
                <div className={styles.image} />
                <div className={styles.courseTitle}>
                    Основы JavaScript #1 — Алексей Вечканов, Альфа Банк
                    <div className={styles.gray}>JavaScript</div>
                </div>
            </div>
        </div>
    </div>
);
