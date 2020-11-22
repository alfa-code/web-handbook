import React from 'react';

import { Props } from './props';

import styles from './specification-table.module.scss';

export const SpecificationTable = ({ html, xhtml } : Props) => {
    return (
        <div className={ styles.specificationTableWrapper }>
            <table className={ styles.specification }>
                <tbody>
                    <tr>
                        <td className={ styles.label }>
                            HTML:
                        </td>
                        { html.map((item, key) => {
                            return(
                                <td key={key}>
                                    {item}
                                </td>
                            )
                        }) }
                        <td className={ styles.label }>
                            XHTML:
                        </td>
                        { xhtml.map((item, key) => {
                            return (
                                <td key={key}>
                                    {item}
                                </td>
                            )
                        }) }
                    </tr>
                </tbody>
            </table>
        </div>

    );
}
