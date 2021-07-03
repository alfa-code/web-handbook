import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

// import { PageTop, DirectoryList } from "Blocks/index";

import { fetchHtmlAttributeInfoAsync } from 'Actions/index';

import { RootState } from 'Src/client/app/app';

import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import { Props } from './props';

// import styles from './attribute-info.module.scss';

class Component extends PureComponent<Props> {
    componentDidMount() {
        const {
            fetchHtmlAttributeInfoDA,
            match: {
                params: {
                    htmlAttribute,
                }
            }
        } = this.props;

        fetchHtmlAttributeInfoDA(htmlAttribute);
    }

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

const mapStateToProps = (state: RootState) => {
    return {

    };
}

const mapDispatchToProps = {
    fetchHtmlAttributeInfoDA: fetchHtmlAttributeInfoAsync.request,
}

const AttributeInfoPage = connect(mapStateToProps, mapDispatchToProps)(Component);

export default AttributeInfoPage;
