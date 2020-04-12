import React, { Component } from 'react';

import { SettingsMainForm } from 'Forms/settings-main-form';

import styles from './settings-block.module.scss';

export class SettingsBlock extends Component {
    render() {
      return (
        <div className={styles.container}>
            <h2>
                РЕДАКТИРОВАТЬ ФОТОГРАФИЮ
            </h2>
            <SettingsMainForm />
        </div>
      );
    }
}
