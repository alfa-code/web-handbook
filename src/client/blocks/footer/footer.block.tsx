import React, { Component } from 'react';

import { Props } from './props';

import { Logo, Icon } from 'Components/index';

import styles from './footer.module.scss';

export class Footer extends Component<Props> {
    render() {
        return (
            <footer>
                <div className={ styles.footer }>
                    <div className={ [styles.footerColumn, 'mt-5'].join(' ') }>
                        <Logo />

                        <div className="mt-1 text-body-3">
                            Профессиональный ресурс для начинающих <br/>
                            и практикующих фронт-энд разработчиков.
                        </div>
                
                        <div className="mt-3 text-body-3">
                            Наши условия 
                            <a href="#" className="link-body-3">использования</a>
                            и
                            <a href="#" className="link-body-3">конфиденциальности</a>
                        </div>
                    </div>
                
                    <div className={ [styles.footerColumn, 'mt-6'].join(' ')}>
                        <div className="text-heading-4">HTML</div>
                
                        <div className="mt-3">
                            <a href="#" className="link-navigation">HTML справочник</a>
                        </div>
                        <div className="mt-3">
                            <a href="#" className="link-navigation">HTML руководства</a>
                        </div>
                    </div>
                
                    <div className={ [styles.footerColumn, 'mt-6'].join(' ') }>
                        <div className="text-heading-4">CSS</div>
                
                        <div className="mt-3">
                        <a href="#" className="link-navigation">CSS справочник</a>
                        </div>
                        <div className="mt-3">
                            <a href="#" className="link-navigation">CSS руководства</a>
                        </div>
                    </div>
                
                    <div className={ [styles.footerColumn, 'mt-6'].join(' ') }>
                        <div className="text-heading-4">Связаться с нами</div>
                
                        <div className="mt-2 text-body-2">
                            Напишите нам если у вас есть предложение <br/> 
                            или заметили ошибку
                        </div>
                        <div className="mt-3">
                            <Icon size="16" icon="email-icon"></Icon>
                            <a href="#" className="link-navigation">web_handbook.info@alfacode.ru</a>
                        </div>
                    </div>
                </div>
                <div className={ styles.footerBottom }>
                    <div className="text-navigation">
                        © «Web Handbook» 2020
                    </div>
                </div>
            </footer>
        );
    }
}