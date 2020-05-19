import React, { Component } from 'react';
import classNames from 'classnames';

import { Heading } from 'Components/heading';
import { Paragraph } from 'Components/paragraph';
import { limitOfChars } from 'Src/utils/limitOfChars';

import styles from './card.module.scss';


interface Props {
    image?: string;
    header?: string;
    text?: string;
    color?: string;
    firstCustomSection?: any;
    secondCustomSection?: any;
    type?: 'horizontal' | 'default';
}

export class Card extends Component<Props> {
    renderCustomSection(section: any) {
      if (!section) {
        return null;
      }

      return section;
    }

    render() {
      const {
        image,
        text,
        header,
        color,
        firstCustomSection,
        secondCustomSection,
        type = 'default'
      } = this.props;

      return (
        <div className={classNames(styles.card, styles[type])}>
          <div className={classNames(styles.header, styles[color])}>
            <img
              src={image}
              alt={header}
              className={styles.image}
            />
          </div>
          <div className={styles.body}>
            <div>
              { this.renderCustomSection(firstCustomSection) }
              <Heading size={3} className={styles.heading}>
                { limitOfChars(header, 70) }
              </Heading>
              <Paragraph className={styles.text}>
                { limitOfChars(text, 150) }
              </Paragraph>
            </div>
            <div className={styles.customSelection}>
                { this.renderCustomSection(secondCustomSection) }
            </div>
          </div>
        </div>
      );
    }
}

export function getCardItem(item) {
    return (
        <Card
            image={item.image}
            key={item.header}
            header={item.header}
            text={item.text}
            color={item.color}
            firstCustomSection={item.firstCustomSection}
            secondCustomSection={item.secondCustomSection}
            type={item.type}
        />
    )
}
