import React, { Component } from 'react';

import { Props } from './props';

import { Tag } from 'Components/index';

import styles from './directory-info.module.scss';

export const DirectoryInfo = ({ directory } : Props) => {
    return (
        <div className={ styles.directoryList }>
            <div className={ styles.directoryListTop }>
                <div className="text-heading-4">
                    { directory.title }
                </div>
            </div>
            <ul>
                { directory.items.map((item, i) => 
                    <li key={ i }>
                        <a className="text-body-1" href={ item.url }>{ item.text }</a>
                        { item.tag ? 
                            <Tag 
                                text={ item.tag.text}
                                className={ item.tag.className}
                            />
                            : null }
                    </li>
                )}
            </ul>
    </div>
    );
}
