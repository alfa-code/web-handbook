import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { Props } from './props';

// import { Button } from 'Components/index';

import { Sidebar, Breadcrumbs, SupportTable, SpecificationTable, AttributesTable } from 'Blocks/index';

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

    render() {
        const {
            tagInfo = {},
            loading,
            htmlTag
        } = this.props;

        const {
            tagName = '',
            description = '',
            // syntax,
        } = tagInfo;

        const isTagExists = isHtmlTagExists(htmlTag);
        if (!isTagExists) {
            return (
                <Layout>
                    <div className="page">
                        <div className="pageContent">
                            Данного тега не существует
                        </div>
                    </div>
                </Layout>
            )
        }

        return (
            <Layout>
                <div className="page">
                    <div className="pageContent">
                        <Breadcrumbs path={["Главное", "HTML справочник ", `Тег <${htmlTag}>`]} />

                        <div className="mt-4 text-heading-2">
                            Тег { loading ? (<Skeleton count={1} />) : (`<${tagName}>`) }
                        </div>

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

                        <div className="mt-5 mt-sm-3 text-heading-4">
                            Описание
                        </div>

                        <div className="mt-3 mt-sm-2 text-body-2">
                            { loading ? (<Skeleton count={ 10 } />) : (this.renderDescription(description)) }
                        </div>

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
                            Атрибуты
                        </div>

                        <div className="mt-3 mt-sm-2">
                            { loading ? (<Skeleton count={4} />) : (
                            <AttributesTable
                                attributes={[
                                    {
    title: "accesskey",
    description: "Активация ссылки с помощью комбинации клавиш."
    },
                                    {
    title: "coords",
    description: "Устанавливает координаты активной области."
    },
                                    {
    title: "download",
    description: "Предлагает скачать указанный по ссылке файл."
    },
                                    {
    title: "href",
    description: "Задает адрес документа, на который следует перейти."
    },
                                    {
    title: "hreflang",
    description: "Идентифицирует язык текста по ссылке."
    },
                                    {
    title: "name",
    description: "Устанавливает имя якоря внутри документа."
    },
                                    {
    title: "rel",
    description: "Отношения между ссылаемым и текущим документами."
    },
                                    {
    title: "rev",
    description: "Отношения между текущим и ссылаемым документами."
    },
                                    {
    title: "shape",
    description: "Задает форму активной области ссылки для изображений."
    },
                                    {
    title: "tabindex",
    description: "Определяет последовательность перехода между ссылками при нажатии на кнопку Tab."
    },
                                    {
    title: "target",
    description: "Имя окна или фрейма, куда браузер будет загружать документ."
    },
                                    {
    title: "title",
    description: "Добавляет всплывающую подсказку к тексту ссылки."
    },
                                    {
    title: "type",
    description: "Указывает MIME-тип документа, на который ведёт ссылка."
    }
                                ]}
                            />
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

                        <div className="mt-6">
                            {/* <include src='src/templates/components/common/comments.html'></include> */}
                        </div>
                    </div>
                    <Sidebar type="html" />
                </div>
            </Layout>
        );
    }
}
