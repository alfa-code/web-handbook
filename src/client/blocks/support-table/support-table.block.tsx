import React from 'react';

import { Props } from './props';

import iebrowserIcon from 'Assets/images/ie-browser-icon.svg';
import chromebrowserIcon from 'Assets/images/chrome-browser-icon.svg';
import operabrowserIcon from 'Assets/images/opera-browser-icon.svg';
import safaribrowserIcon from 'Assets/images/Safari.png';
import firefoxbrowserIcon from 'Assets/images/firefox-browser-icon.svg';
import androidIcon from 'Assets/images/android-icon.svg';
import iosIcon from 'Assets/images/ios-icon.svg';

import { Icon } from 'Components/Index';

import styles from './support-table.module.scss';

export const SupportTable = ({ ie, chrome, safari, firefox, opera, android, ios } : Props) => {
    return (
        <div className="tableWrapper">
            <table className={ styles.support }>
                <thead>
                    <tr>
                        <th>
                            <img src={iebrowserIcon} alt="Internet Explorer" />
                            <span>IE</span>
                        </th>
                        <th>
                            <img src={chromebrowserIcon} alt="Chrome" />
                            <span>Chrome</span>
                        </th>
                        <th>
                            <img src={operabrowserIcon} alt="Opera" />
                            <span>Opera</span>
                        </th>
                        <th>
                            <img src={safaribrowserIcon} alt="Safari" />
                            <span>Safari</span>
                        </th>
                        <th>
                            <img src={firefoxbrowserIcon} alt="Firefox" />
                            <span>Firefox</span>
                        </th>
                        <th>
                            <img src={androidIcon} alt="Android" />
                            <span>Android</span>
                        </th>
                        <th>
                            <img src={iosIcon} alt="IOS" />
                            <span>IOS</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Icon icon="check-icon" size="16" />
                            {ie}
                        </td>   
                        <td>
                            <Icon icon="check-icon" size="16" />
                            {chrome}
                        </td>  
                        <td>
                            <Icon icon="check-icon" size="16" />
                            {opera}
                        </td>  
                        <td>
                            <Icon icon="check-icon" size="16" />
                            {safari}
                        </td>  
                        <td>
                            <Icon icon="check-icon" size="16" />
                            {firefox}
                        </td>  
                        <td>
                            <Icon icon="check-icon" size="16" />
                            {android}
                        </td>  
                        <td>
                            <Icon icon="check-icon" size="16" />
                            {ios}
                        </td>  
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
