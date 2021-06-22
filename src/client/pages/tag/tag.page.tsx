import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Props } from './props';

import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import { Alert } from 'Src/client/components';

import { SupportTable, SpecificationTable, AttributesTable } from 'Blocks/index';

// import VideoImg from "Assets/images/video-player.png";
import { isHtmlTagExists } from 'Utils/html';

// import styles from './tag.module.scss';
import { Layout } from 'Pages/index';

export class Tag extends React.PureComponent<Props> {
    renderDescription(descriptions) {
        if (typeof descriptions === 'string') {
            return (
                <p>
                    { descriptions }
                </p>
            )
        }

        if (Array.isArray(descriptions)) {
            return descriptions.map((description, i) => {
                return (
                    <p key={ i }>
                        { description }
                    </p>
                )
            });
        }

        return '---';
    }

    // renderSyntax = (syntax: string[]) => {
    //     const reducer = (accumulator, currentValue) => accumulator + currentValue;

    //     return syntax.map(codePart, i) => {
    //         return (
    //             <p key={ i }>
    //                 { codePart }
    //             </p>
    //         )
    //     });
    // }

    renderOmissions = (omissions: string[] = []) => {
        return omissions.map((omission, i) => {
            return (
                <p key={ i }>
                    { omission }
                </p>
            )
        });
    }

    renderAttributes = (tagInfo: any = {}) => {
        const {
            content_attributes = {},
        } = tagInfo;

        const attributes = [];

        if (content_attributes.custom_attributes) {
            attributes.push(...content_attributes.custom_attributes);
        }

        if (content_attributes.global_attributes) {
            attributes.unshift({
                name: 'global',
                description: 'Глобальные атрибуты'
            })
        }

        return (
            <div>
                <div className="mt-5 mt-sm-3 text-heading-4">
                    Атрибуты
                </div>
                <div className="mt-3 mt-sm-2">
                    <AttributesTable
                        attributes={ attributes }
                    />
                </div>
            </div>
        )
    }

    renderCategories = (categories) => {
        return categories.map((category, i) => {
            return (
                <p key={ i }>
                    { category }
                </p>
            )
        });
    }

    render() {
        const {
            tagInfo,
            loading,
            htmlTag
        } = this.props;

        const isTagExists = isHtmlTagExists(htmlTag);
        if (!isTagExists) {
            return (
                <Layout>
                    <div className="page">
                        <div className="pageContent">
                            Данного тега не существует.
                        </div>
                    </div>
                </Layout>
            )
        }

        if (!tagInfo && !loading) {
            return (
                <Layout>
                    <div className="page">
                        <div className="pageContent">
                            Данные временно отсутствуют.
                        </div>
                    </div>
                </Layout>
            )
        }

        const {
            tagName = '',
            description = '',
            content_attributes,
            content_model = '',
            tag_omission,
            categories,
            obsolete = false,
        } = tagInfo || {};

        return (
            <Layout>
                <div className="page">
                    <div className="pageContent">
                        <BreadcrumbsContainer />

                        { loading && (
                            <>
                                <div className="mt-4">
                                    <Skeleton count={ 1 } />
                                </div>
                                <div className="mt-4 text-heading-2">
                                    <Skeleton count={ 1 } />
                                </div>
                                <div className="mt-4">
                                    <Skeleton count={ 1 } />
                                </div>
                                <div className="mt-4 text-heading-2">
                                    <Skeleton count={ 1 } />
                                </div>
                                <div className="mt-4">
                                    <Skeleton count={ 1 } />
                                </div>
                            </>
                        ) }

                        { !loading && (
                            <>
                                <div className="mt-4 text-heading-2">
                                    Элемент { `<${tagName}>` }
                                </div>

                                { obsolete && (
                                    <>
                                        <br/>
                                        <br/>
                                        <Alert message="Данный элемент устарел и не должен использоваться!" />
                                    </>
                                ) }

                                { description && (
                                    <>
                                        <div className="mt-5 mt-sm-3 text-heading-4">
                                            Описание
                                        </div>
                                        <div className="mt-3 mt-sm-2 text-body-2">
                                            { this.renderDescription(description) }
                                        </div>
                                    </>
                                ) }

                                { categories && (
                                    <>
                                        <div className="mt-5 mt-sm-3 text-heading-4">
                                            Категории
                                        </div>
                                        <div className="mt-3 mt-sm-2 text-body-2">
                                            { this.renderCategories(categories) }
                                        </div>
                                    </>
                                ) }

                                { content_model && (
                                    <>
                                        <div
                                            className="mt-5 mt-sm-3 text-heading-4"
                                            title="Описание того, какой контент должен быть включен в качестве потомков элемента."
                                        >
                                            Модель контента
                                        </div>

                                        <div className="mt-3 mt-sm-2">
                                            { content_model }
                                        </div>
                                    </>
                                ) }

                                { tag_omission && (
                                    <>
                                        <div className="mt-5 mt-sm-3 text-heading-4">
                                            Пропуски
                                        </div>

                                        <div className="mt-3 mt-sm-2 text-body-2">
                                            { this.renderOmissions(tag_omission) }
                                        </div>
                                    </>
                                ) }

                                { tagInfo && (
                                    <>
                                        { this.renderAttributes(tagInfo) }
                                    </>
                                ) }
                            </>
                        ) }



                        {/* <div className="mt-4">
                            <span className="text-body-3">Тип тега: </span>
                            <a href="#" className="link-body-3">
                                { loading ? (<Skeleton count={1} width={100} />) : ('Строчные элементы') }
                            </a>
                        </div> */}

                        {/* <div className="mt-4">
                            <img src={VideoImg} alt="Video" />
                        </div>

                        <div className="mt-4">
                            <Button className="btnGreen" text="Показывать видео" icon="check-icon" />
                        </div> */}

                        {/* <div className="mt-4">
                            { loading ? (<Skeleton count={4} />) : (
                                <SupportTable
                                    ie="1.0+"
                                    chrome="1.0+"
                                    opera="2.0+"
                                    safari="1.0+"
                                    firefox="1.0+"
                                    android="1.0+"
                                    ios="1.0+"
                                />
                            ) }
                        </div> */}

                        {/* <div className="mt-5 mt-sm-3 text-heading-4">
                            Cпецификация
                        </div>

                        <div className="mt-3 mt-sm-2">
                            { loading ? (<Skeleton count={4} />) : (
                                <SpecificationTable
                                    html={["3.2", "4.01", "5.0"]}
                                    xhtml={["1.0", "1.1"]}
                                />
                            ) }
                        </div> */}

                        {/* <div className="mt-5 mt-sm-3 text-heading-4">
                            Синтаксис
                        </div>
                        <div className="mt-3 mt-sm-2">
                            { loading ? (<Skeleton count={1} />) : (
                                <div className="code">
                                    {"<!DOCTYPE html> <br> <html>"}
                                </div>
                            ) }
                        </div> */}

                        

                        {/* <div className="mt-5 mt-sm-3 text-heading-4">
                            Закрывающий тег
                        </div>

                        <div className="mt-3 mt-sm-2 text-body-2">
                            { loading ? (<Skeleton count={1} />) : (
                                <div className="code">
                                    { 'Обязателен.' }
                                </div>
                            ) }
                        </div> */}

                        {/* <div className="mt-5 mt-sm-3 text-heading-4">
                            Пример
                        </div>

                        <div className="mt-3 mt-sm-2">
                            { loading ? (<Skeleton count={4} />) : (
                                <div className="code">
                                    {"<!DOCTYPE html> <br> <html>"}
                                </div>
                            ) }
                        </div> */}

                        {/* <div className="mt-6">
                            <include src='src/templates/components/common/comments.html'></include>
                        </div> */}
                    </div>
                </div>
            </Layout>
        );
    }
}
