import React from 'react';

import userIcon from 'Assets/icons/info-icons/user.svg';

import styles from './user-label.pcss';

interface Props {
    name: string;
    extra: string;
}

export class UserLabel extends React.Component<Props> {
    render() {
        const { name, extra } = this.props;

        return (
            <div className={ styles.userLabel }>
                <img
                    src={ userIcon }
                    alt='Иконка пользователя'
                    className={ styles.image }
                />
                <div className={ styles.info }>
                    <div className={ styles.name }>
                        { name }
                    </div>
                    <div className={ styles.extra }>
                        { extra }
                    </div>
                </div>
            </div>
        );
    }
}

