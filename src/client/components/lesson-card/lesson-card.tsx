import React, { ReactNode } from 'react';

import JSPicture from 'Assets/images/js.svg';
import TimeIcon from 'Assets/icons/info-icons/clock.svg';
import PlayIcon from 'Assets/icons/info-icons/play.svg';

import { Props } from './props';

import styles from './lesson-card.module.scss';
import { Link } from 'react-router-dom';

export class LessonCard extends React.PureComponent<Props> {
    render(): ReactNode {
        const {
            picture = JSPicture,
            desc,
            title,
            timing,
            numberOfLesson
        } = this.props;

        return (
            <div className={ styles.root }>
                <div className={ styles.content }>
                    <div className={ styles.picture }>
                        <img src={ picture } alt={ title }/>
                    </div>
                    <div className={ styles.body }>
                        <div className={ styles.title }>
                            { title }
                        </div>
                        <div className={ styles.desc }>
                            { desc }
                            <span className={ styles.divider }>&bull;</span>
                            { numberOfLesson } урок
                        </div>
                    </div>
                    <div className={ styles.time }>
                        <div className={ styles.timeIcon }>
                            <img src={ TimeIcon }/>
                        </div>
                        <div className={ styles.timeCounter }>
                            { timing }
                        </div>
                    </div>
                    <Link to='/' className={styles.playIcon}>
                        <img src={PlayIcon} alt='Play video'/>
                    </Link>
                </div>
            </div>
        );
    }
}

