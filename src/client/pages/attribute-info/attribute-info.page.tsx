import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import Skeleton from 'react-loading-skeleton';

import { WorkInProgress } from 'Components/work-in-progress';

// import { PageTop, DirectoryList } from "Blocks/index";

import { PageHeader } from 'Components/page-header';

import { fetchHtmlAttributeInfoAsync } from 'Actions/index';

import { RootState } from 'Src/client/app/app';

import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import { JsxParserWrapper } from 'Src/client/components/jsx-parser-wrapper';

import { CommonTable } from 'Components/common-table';

import {
    selectIsHtmlAttributeInfoLoading,
    selectHtmlAttributeInfo,
} from 'Selectors/index';

import { DOCUMENT_TITLES } from 'Constants/document-titles';

import { Props } from './props';

import styles from './attribute-info.module.scss';

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

        document.title = DOCUMENT_TITLES.htmlAttributeInfoPage(htmlAttribute);
    }

    renderValuesTable = () => {
        const {
            values: {
                values
            }
        } = this.props.htmlAttributeInfo;

        const mappedValues = values.map(({ name, meaning }) => [name, meaning])

        return (
            <CommonTable
                headers={['Значение', 'Описание']}
                values={mappedValues}
            />
        )
    }

    renderDescription(descriptions) {
        if (typeof descriptions === 'string') {
            return (
                <>
                    <div className={styles.paragraph}>
                        <JsxParserWrapper>
                            {descriptions}
                        </JsxParserWrapper>
                    </div>
                </>
            )
        }

        if (Array.isArray(descriptions)) {
            return descriptions.map((description: string, i) => {
                return (
                    <>
                        <div
                            className={styles.paragraph}
                            key={i}
                        >
                            <JsxParserWrapper content={description} />
                        </div>
                    </>
                )
            });
        }

        return '---';
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
            const { additionalDescription } = htmlAttributeInfo;
            const {
                values: {
                    defaultValue,
                    values
                }
            } = htmlAttributeInfo;

            return (
                <div className="page">
                    <div className="pageContent">
                        <BreadcrumbsContainer />
                        <PageHeader>
                            HTML Атрибут {htmlAttributeInfo.name}
                        </PageHeader>
                        <h2>
                            Краткое описание
                        </h2>
                        <JsxParserWrapper content={htmlAttributeInfo.description} />
                        <h2>
                            Тип атрибута
                        </h2>
                        <p>
                            {htmlAttributeInfo.type}
                        </p>
                        <h2>
                            Значения
                        </h2>
                        <JsxParserWrapper content={htmlAttributeInfo.values.description} />
                        <br />
                        {this.renderValuesTable()}
                        <h2>
                            Значение по умолчанию
                        </h2>
                        <p>
                            {defaultValue}
                        </p>
                        <h2>
                            Допонительное описание
                        </h2>
                        {additionalDescription ? this.renderDescription(additionalDescription) : null}
                    </div>
                </div>
            );
        }

        return <WorkInProgress />
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
