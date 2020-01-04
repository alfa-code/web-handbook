import React from 'react';

import clockIcon from 'Assets/icons/info-icons/clock.svg';
import videoIcon from 'Assets/icons/info-icons/video-icon.svg';
import fireIcon from 'Assets/icons/info-icons/fire.svg';
import calendarIcon from 'Assets/icons/info-icons/calendar.svg';

import styles from './info-label.module.scss';

interface Props {
    text: string;
    iconType: 'camera' | 'clock' | 'calendar';
}

export class InfoLabel extends React.Component<Props> {
    getIcon = () => {
      const { iconType } = this.props;

      switch (iconType) {
        case 'camera':
          return videoIcon;
        case 'clock':
          return clockIcon;
        case 'calendar':
          return calendarIcon;
        default:
          return fireIcon;
      }
    }

    render() {
      const { text } = this.props;

      return (
        <div className={styles.label}>
          <img
            src={this.getIcon()}
            alt="Иконка лейбла"
            className={styles.icon}
          />
          <span>
            { text }
          </span>
        </div>
      );
    }
}
