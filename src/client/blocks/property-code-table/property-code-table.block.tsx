import React from 'react';

import { Props } from './props';

import styles from './property-code-table.module.scss';

export const PropertyCodeTable = ({} : Props) => {
    return (
        <div>
            <div className={ styles.cssTableWrapper }>
                <table className={ styles.codeTable }>
                    <tbody>
                        <tr>
                            <th>
                                Стиль автора
                            </th>
                            <th>
                                Стиль пользователя
                            </th>
                            <th>
                                Результат
                            </th>
                        </tr>
                        { [1,2,3].map(item => {return (
                            <tr key={item}>
                                <td>
                                    BODY 
                                        <br />
                                        /* Серый цвет текста */
                                        <br />
                                        color: silver; 
                                        <br />
                                        /* Размер текста 8 пунктов */ 
                                        <br />
                                        font-size: 8pt
                                        <br />
                                    
                                </td>
                                <td>
                                    BODY 
                                        <br />
                                        /* Серый цвет текста */
                                        <br />
                                        color: #000; 
                                        <br />
                                        /* Размер текста 8 пунктов */ 
                                        <br />
                                        font-size: 12pt
                                        <br />
                                    
                                </td>
                                <td>
                                    Lorem ipsum dolor sit amet... <br />
                                    Будет применяться стиль автора, а именно: установлен серый цвет текста, размер шрифта 8 пунктов.
                                </td>
                            </tr>
                        )}) }

                    </tbody>
                </table>
            </div>
            <div className={ styles.tableLabel }>
                <div className="mt-2 text-body-3">
                    Табл. 1. Результат применения !important
                </div>
            </div>
        </div>
    );
}
