import React, { PureComponent } from 'react';

import { PageTop, DirectoryList } from "Blocks/index";

import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import { Props } from './props';

// import styles from './attribute-info.module.scss';

class AttributeInfoPage extends PureComponent<Props> {
    render() {
        return (
            <div className="page">
                <div className="pageContent">
                    <BreadcrumbsContainer />
                </div>
            </div>
        );
    }
}

export default AttributeInfoPage;
