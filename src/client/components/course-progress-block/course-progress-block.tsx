import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Props } from './props';

import styles from './course-progress-block.module.scss';
import ProgressBar from 'Components/progress-bar/progress-bar';


export class CourseProgressBlock extends React.PureComponent<Props> {
    render(): ReactNode {
        const { percent } = this.props;

        return (
            <div>
                <div className={ styles.body }>
                    <div className={ styles.progressCount }>
                        Просмотрено { percent }%
                    </div>
                    <Link to='/' className={ styles.continueLink }>
                        Продолжить смотреть
                    </Link>
                </div>
                <ProgressBar percent={15}/>
            </div>
        );
    }
}

