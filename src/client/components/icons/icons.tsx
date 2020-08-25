import React from 'react';
import WatchImg from 'Assets/icons/info-icons/eye.svg';
import MessageImg from 'Assets/icons/info-icons/message-square.svg';

import { IconProps } from 'Components/icons/props';

import styles from './icons.module.scss';

export const Icon = (props: IconProps) => {
    const { className, size, src } = props;

    return (
        <div
            className={`${styles.icon} ${styles[`size-${size}`]} ${className || ''}`}
            style={{ backgroundImage: `url(${src})` }}
        />
    );
};

export function generateIcon(src) {
    return function IconUI(props: IconProps) {
        const { className, size = 'm' } = props;

        return (
            <Icon src={src} size={size} className={className}/>
        )
    }
}

export const WatchIcon = generateIcon(WatchImg);
export const MessageIcon = generateIcon(MessageImg);
