import React from 'react';

import eyeIcon from 'Assets/icons/info-icons/eye.svg';

import styles from './info-label.pcss';

interface Props {
    text: string;
    iconType: 'eye';
}

export class InfoLabel extends React.Component<Props> {
    getIcon = () => {
        const { iconType } = this.props;

        switch (iconType) {
            case 'eye':
                return eyeIcon;
            default:
                return eyeIcon;
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
