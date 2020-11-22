import React from 'react';

import { Props } from './props';

import styles from './property-info-table.module.scss';

export const PropertyInfoTable = ({ info } : Props) => {
    return (
        <div className={ styles.cssTableWrapper }>
            <table>
                <tbody>
                { info.map((item, key) => {
                    return (
                        <tr key={key}>
                            <th className="text-body-2">{item.title}</th>
                            <td className="text-body-2">{item.value}</td>
                        </tr>
                    )
                })}  
                </tbody>              
            </table>
        </div>
    );
}
