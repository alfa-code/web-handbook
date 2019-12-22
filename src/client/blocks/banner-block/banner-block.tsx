import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

import { Definition } from 'Components/definition';
import { PageContainer } from 'Components/page-container';

import globalStyles from 'Src/client/global.module.scss';

import styles from './banner-block.module.scss';

interface Props {
    imageUrl?: string;
    direction?: 'right' | 'left';
    undertitle?: string;
    title?: string;
    text?: string;
}
interface State {}

export class BannerBlock extends Component<Props, State> {
    getDirectionClassName = () => {
      const { direction } = this.props;

      switch (direction) {
        case 'left':
          return styles.leftDirection;
        case 'right':
          return styles.rightDirection;
        default:
          return styles.leftDirection;
      }
    }

    render(): ReactNode {
      const { imageUrl, children } = this.props;

      const { undertitle, text, title } = this.props;

      return (
        <div className={classNames(styles.block, globalStyles.verticalNeighbors)}>
          <PageContainer>
            <div className={classNames(styles.contentBlock, this.getDirectionClassName())}>
              <div className={styles.description}>
                <Definition
                  upTitle={undertitle}
                  title={title}
                  titleSize={2}
                  text={text}
                  position="left"
                  uptitleClassName={styles.subtitle}
                  paragraphClassName={styles.text}
                />
                { children }
              </div>
              { imageUrl && (
                <img
                  src={imageUrl}
                  className={styles.image}
                  alt="Иллюстрация"
                />
              ) }
            </div>
          </PageContainer>
        </div>
      );
    }
}
