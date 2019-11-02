import React from 'react';

import clockIcon from 'Assets/icons/info-icons/clock.svg';
import videoIcon from 'Assets/icons/info-icons/video.svg';
import fireIcon from 'Assets/icons/info-icons/fire.svg';

import styles from './info-label.pcss';

interface Props {
    text: string;
    iconType: 'camera' | 'clock';
}

export class InfoLabel extends React.Component<Props> {
    getIcon = () => {
        const { iconType } = this.props;

        switch (iconType) {
            case 'camera':
                return videoIcon;
            case 'clock':
                return clockIcon;
            default:
                return fireIcon;
        }
    }

    render() {
        const { text } = this.props;

        return (
            <div className={ styles.label }>
                <img
                    src={ this.getIcon() }
                    alt='Иконка лейбла'
                    className={ styles.icon }
                />
                <span>
                    { text }
                </span>
            </div>
        );
    }
}
