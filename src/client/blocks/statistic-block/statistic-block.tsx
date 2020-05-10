import React, { ReactNode } from 'react';

import { ItemProps } from './props';

import styles from './statistic-block.module.scss';

export const StatisticBlockItem = function ({ count, desc }: ItemProps) {
    return (
        <div className={styles.item}>
            <div className={styles.count}>{count}</div>
            <div className={styles.desc}>{desc}</div>
        </div>
    )
};

export class StatisticBlock extends React.PureComponent {
    render(): ReactNode {
        return (
            <div className={styles.root}>
                <div className={styles.body}>
                    <StatisticBlockItem count={349} desc={'Просмотренные минуты'}/>
                    <StatisticBlockItem count={34} desc={'Уроков смотрели'}/>
                </div>
            </div>
        );
    }
}
