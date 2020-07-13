import React, { Component } from 'react';

import { Logo } from 'Components/logo';
import { MenuBurger } from 'Components/menu-burger';
import { MobileMenu } from 'Components/mobile-menu';

import { State } from './state';

import styles from './mobile-header.module.scss';
import { WaveEffect } from 'Components/wave-effect/wave-effect';

/**
 * Компонент мобильной шапки
 */
export class MobileHeader extends Component<{}, State> {

    state = {
        menuOpened: false
    }

    toggleMenu = () => {
        this.setState(prev => ({ menuOpened: !prev.menuOpened }));
    }

    render() {
        const { menuOpened } = this.state;

        return (
            <React.Fragment>
                <div className={ styles.padding } />
                <div className={ styles.base }>
                    <div className={ styles.logoMobile }>
                        <Logo type="short" />
                    </div>
                    <WaveEffect onClick={ this.toggleMenu } className={ styles.burger }>
                        <MenuBurger active={ menuOpened } />
                    </WaveEffect>
                </div>
                {
                    menuOpened &&
                        <div className={ styles.menu }>
                            <MobileMenu />
                        </div>
                }
            </React.Fragment>
        );
    }
}
