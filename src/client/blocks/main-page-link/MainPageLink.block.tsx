import React from 'react';

import { Props } from './props';
import { Link } from "react-router-dom";
import { Icon } from 'Components/index';
import styles from './MainPageLink.module.scss';

export const MainPageLink = (props: Props) => {
    const {
        title,
        subTitle,
        image,
        url
    }= props;

    return (
        <Link
            to={ url }
            className={styles.mainPageLinkContentLink}
        >
                <div className={styles.mainPageLink}>
                    <div className={styles.mainPageLinkContent}>
                        <div className="text-heading-4">{title}</div>
                        <div className="mt-2 text-body-2">{subTitle}</div>
                        
                            <div className={styles.mainPageLinkContentLinkInner}>
                                <span className={ styles.fakeLink }>
                                    Смотреть
                                </span>
                                <Icon
                                    className={styles.svgIcon}
                                    size="16"
                                    icon="arrow-down"
                                />
                            </div>
                        
                    </div>
                    <img src={image} alt={title} />
                </div>
        </Link>
        // <div className={styles.mainPageLink}>
        //     <div className={styles.mainPageLinkContent}>
        //         <div className="text-heading-4">{title}</div>
        //         <div className="mt-2 text-body-2">{subTitle}</div>
        //         <Link
        //             to={ url }
        //             className={styles.mainPageLinkContentLink}
        //         >
        //             <div className={styles.mainPageLinkContentLinkInner}>
        //                 Смотреть
        //                 <Icon
        //                     className={styles.svgIcon}
        //                     size="16"
        //                     icon="arrow-down"
        //                 />
        //             </div>
        //         </Link>
        //     </div>
        //     <img src={image} alt={title} />
        // </div>
    );
}
