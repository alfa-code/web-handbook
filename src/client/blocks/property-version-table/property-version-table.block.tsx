import React from 'react';

import { Props } from './props';

import styles from './property-version-table.module.scss';
import { Icon } from 'Src/client/components';

export const PropertyVersionTable = ({} : Props) => {
    return (
        <div className={ styles.cssTableWrapper }>
            <table className={ styles.versionTable }>
                <tbody>
                    <tr>
                        <th className="text-body-2">CSS 1</th>
                        <th className="text-body-2">CSS 2</th>
                        <th className="text-body-2">CSS 2.1</th>
                        <th className="text-body-2">CSS 3</th>
                    </tr>
                    <tr>
                        <td>
                            <Icon size="16" icon="check-icon" />
                        </td>
                        <td>
                            <Icon size="16" icon="check-icon" />
                        </td>
                        <td>
                            <Icon size="16" icon="check-icon" />
                        </td>
                        <td>
                            <Icon size="16" icon="check-icon" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
