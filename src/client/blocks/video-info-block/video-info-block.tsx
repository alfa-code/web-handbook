import React, { ReactNode } from 'react';

import { UserLabel } from 'Components/user-label';
import { MessageIcon, WatchIcon } from 'Components/icons/icons';

import style from './video-info-block.module.scss';

import { Props } from './props';


export class VideoInfoBlock extends React.PureComponent<Props> {
    render(): ReactNode {
        const { views, comments } = this.props;

        return (
            <div className={style.body}>
               <UserLabel
                   image="https://avatars2.githubusercontent.com/u/20814779?s=400&u=be55b21208858e6abe2db857658668eba61174d6&v=4"
                   name="Алексей Вечканов"
                   extra="Веб-разработчик в Alfa-bank"
               />
               <div className={style.statBlock}>
                    <div className={style.statItem}>
                        <WatchIcon/>
                        <span className={style.statDesc}>
                            {views} просмотров
                        </span>
                    </div>
                   <div className={style.statItem}>
                       <MessageIcon/>
                       <span className={style.statDesc}>
                            {comments} комментариев
                        </span>
                   </div>
               </div>
            </div>
        );
    }
}
