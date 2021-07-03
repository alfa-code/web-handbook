import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import Skeleton from 'react-loading-skeleton';

// import { PageTop, DirectoryList } from "Blocks/index";

import { PageHeader } from 'Components/page-header';

import { fetchHtmlAttributeInfoAsync } from 'Actions/index';

import { RootState } from 'Src/client/app/app';

import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import {
    selectIsHtmlAttributeInfoLoading,
    selectHtmlAttributeInfo,
} from 'Selectors/index';


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
        const { isHtmlAttributeInfoLoading, htmlAttributeInfo } = this.props;

        if (isHtmlAttributeInfoLoading) {
            return (
                <>
                    <br />
                    <br />
                    <br />
                    <Skeleton count={2} />
                    <br />
                    <br />
                    <br />
                    <Skeleton count={2} />
                    <br />
                    <br />
                    <br />
                    <Skeleton count={2} />
                </>
            )
        }

        if (htmlAttributeInfo) {
            return (
                <div className="page">
                    <div className="pageContent">
                        <BreadcrumbsContainer />
                        <PageHeader>
                            HTML Атрибут { htmlAttributeInfo.name }
                        </PageHeader>
                        <p>
                            { htmlAttributeInfo.type }
                        </p>
                    </div>
                </div>
            );
        }

        return (
            <div>
                Дангные временно отсутствуют
            </div>
        )
    }
}

const mapStateToProps = (state: RootState, props: Props) => {
    const {
        match: {
            params: {
                htmlAttribute,
            }
        }
    } = props;

    return {
        isHtmlAttributeInfoLoading: selectIsHtmlAttributeInfoLoading(state),
        htmlAttributeInfo: selectHtmlAttributeInfo(state, htmlAttribute),
    };
}

const mapDispatchToProps = {
    fetchHtmlAttributeInfoDA: fetchHtmlAttributeInfoAsync.request,
}

const AttributeInfoPage = connect(mapStateToProps, mapDispatchToProps)(Component);

export default AttributeInfoPage;
