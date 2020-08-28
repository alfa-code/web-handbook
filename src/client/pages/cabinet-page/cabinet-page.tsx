import React, { ReactNode } from 'react';
import { UserInfoBlock } from 'Blocks/user-info-block';
import { StatisticBlock } from 'Blocks/statistic-block';
import { CoursesProgressBlock } from 'Blocks/courses-progress-block/courses-progress-block';
import { Heading } from 'Components/heading';
import { RecentCoursesBlock } from 'Blocks/recent-courses-block/recent-courses-block';

import styles from './cabinet-page.module.scss';

import { Props } from './props';

export class CabinetPage extends React.PureComponent<Props> {
    render(): ReactNode {
        const { name, surname, avatar, description } = this.props.userParams;
        return (
            <React.Fragment>
                <div>
                    <UserInfoBlock
                        header={
                            <Heading size={1}>
                                { `${name} ${surname}` }
                            </Heading>
                        }
                        avatarUrl={ avatar }
                        description={ description }
                    />
                </div>
                <div className={styles.statisticBlock}>
                    <StatisticBlock/>
                </div>
                <div className={styles.courseProgressBlock}>
                    <CoursesProgressBlock/>
                </div>
                <div className={styles.recentCoursesBlock}>
                    <RecentCoursesBlock/>
                </div>
            </React.Fragment>
        );
    }
}
