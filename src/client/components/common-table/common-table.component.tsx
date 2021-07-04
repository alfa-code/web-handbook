import React from 'react';

import { Props } from './props';

import styles from './common-table.module.scss';

import { JsxParserWrapper } from 'Src/client/components/jsx-parser-wrapper';

// import { Link } from 'react-router-dom';

export const CommonTable = (props: Props) => {
    const { headers, values } = props;

    const renderHeaders = () => {
        return headers.map((item, id) => {
            return (
                <th key={ id }>
                    { item }
                </th>
            )
        })
    }

    const renderValues = () => {
        const length = headers.length;

        return values.map((item: string[], id) => {
            const tds = [];

            item.forEach((str, id) => {
                if(id <= length) {
                    tds.push(
                        <td key={ id }>
                            <JsxParserWrapper content={ str }/>
                        </td>
                    )
                }
            });

            return (
                <tr key={ id }>
                    { tds }
                </tr>
            )
        });
    }

    return (
        <div className="tableWrapper">
            <table cellSpacing="0" className={ styles.attributes } >
                <thead>
                    <tr>
                        { renderHeaders() }
                    </tr>
                </thead>
                <tbody>
                    { renderValues() }
                </tbody>
            </table>
        </div>
    );
}
