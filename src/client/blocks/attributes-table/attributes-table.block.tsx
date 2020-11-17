import React from 'react';

import { Props } from './props';

import styles from './attributes-table.module.scss';

export const AttributesTable = ({attributes} : Props) => {
    return (
        <div className="tableWrapper">
            <table cellSpacing="0" className={ styles.attributes } >
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    { attributes.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>
                                    <a className="link-body-2" href="#">
                                        {item.title}
                                    </a>
                                </td>
                                <td>
                                    <span className="text-body-2">{item.description}</span>
                                </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </div>
    );
}
