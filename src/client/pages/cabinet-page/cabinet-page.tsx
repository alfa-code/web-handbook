import React, { ReactNode } from 'react';
import { UserInfoBlock } from 'Blocks/user-info-block';
import { StatisticBlock } from 'Blocks/statistic-block';
import { CoursesProgressBlock } from 'Blocks/courses-progress-block/courses-progress-block';

export class CabinetPage extends React.PureComponent {
    render(): ReactNode {
        return (
            <React.Fragment>
                <UserInfoBlock/>
                <StatisticBlock/>
                <CoursesProgressBlock/>
            </React.Fragment>
        );
    }
}
