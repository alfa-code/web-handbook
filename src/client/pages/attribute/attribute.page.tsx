import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ValuesType } from 'utility-types';

import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import { PageTop } from 'Blocks/index';

import { RootState } from 'Src/client/app/app';

import { Link } from 'react-router-dom';

import PageTopImage from "Assets/images/html-instruments.svg";

import { Props } from './props';

// import { SupportTable, SpecificationTable } from 'Blocks/index';

import listStyles from "Src/client/styles/lists.module.scss";
import linkStyles from "Src/client/styles/links.module.scss";

// import styles from './attribute.module.scss';

class AttributeContainer extends Component<Props> {
    sortAttributesByGroups = () => {
        const { htmlAttributesList } = this.props;

        const sortedAttributes = {};

        function sortByGroup(item: ValuesType<typeof htmlAttributesList>) {
            const isArrayNeeded = !(sortedAttributes[item.type]);

            isArrayNeeded ? (sortedAttributes[item.type] = [item]) : sortedAttributes[item.type].push(item);
        }

        htmlAttributesList.forEach(sortByGroup);

        return sortedAttributes;
    }

    renderGroupsOfAttributes = () => {
        const sorted = this.sortAttributesByGroups();

        const keys = Object.keys(sorted);

        const makeListView = (key) => {
            return (
                <ul className={ listStyles.elementsList }>
                    {
                        (
                            sorted[key].map(item => {
                                return (
                                    <li key={ item.name }>
                                        <Link
                                            to={ `/attribute-list/${item.name}` }
                                            className={ linkStyles.listLink }
                                        >
                                            { item.name }
                                        </Link>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
            )
        }

        const makeSectionView = (key) => {
            return (
                <div
                    key={ key }
                    className={ listStyles.listSection }
                >
                    <h2 className={ listStyles.listSectionHeader }>
                        { this.mapHeaderName(key) }
                    </h2>
                    <div>
                        { makeListView(key) }
                    </div>
                </div>
            )
        }

        return keys.map(makeSectionView);
    }

    mapHeaderName = (name) => {
        switch (name) {
            case 'global': {
                return 'Глобальные атрибуты'
            }
            default: {
                return name;
            }
        }
    }

    render() {
        return (
            <div className="page">
                <div className="pageContent">
                    <BreadcrumbsContainer />

                    <PageTop
                        title="Список HTML атрибутов"
                        description="Список разбит на группы по типу атрибута"
                        img={ PageTopImage }
                    />

                    { this.renderGroupsOfAttributes() }

                    {/* <div className="mt-4 text-heading-2">
                            Атрибут href
                        </div>

                        <div className="mt-4">
                            <span className="text-body-3">Тип тега: </span>
                            <a href="#" className="link-body-3 ml-1">Строчные элементы</a>
                        </div>

                        <div className="mt-4">
                            <SupportTable
                                ie="1.0+"
                                chrome="1.0+"
                                opera="2.0+"
                                safari="1.0+"
                                firefox="1.0+"
                                android="1.0+"
                                ios="1.0+"
                                />
                        </div>

                        <div className="mt-5 mt-sm-3 text-heading-4">
                            Cпецификация
                        </div>

                        <div className="mt-3 mt-sm-2">
                            <SpecificationTable
                                html={["3.2", "4.01", "5.0"]}
                                xhtml={["1.0", "1.1"]} />
                        </div>

                        <div className="mt-5 mt-sm-3 text-heading-4">
                            Описание
                        </div>

                        <div className="mt-3 mt-sm-2 text-body-2">
                            Задает адрес документа, на который следует перейти. Поскольку в качестве адреса ссылки может использоваться документ любого типа, то результат перехода по ссылке зависит от конечного файла. Так, архивы (файлы с расширением zip или rar) будут сохраняться на локальный диск. По умолчанию новый документ загружается в текущее окно браузера, однако это свойство можно изменить с помощью атрибута target.
                        </div>

                        <div className="mt-5 mt-sm-3 text-heading-4">
                            Синтаксис
                        </div>

                        <div className="mt-3 mt-sm-2">
                            <div className="code">
                                {"<!DOCTYPE html> <br> <html>"}
                            </div>
                        </div>

                        <div className="mt-5 mt-sm-3 text-heading-4">
                            Обязательный атрибут
                        </div>

                        <div className="mt-3 mt-sm-2 text-body-2">
                            Обязателен для ссылок.
                        </div>

                        <div className="mt-5 mt-sm-3 text-heading-4">
                            Значения
                        </div>

                        <div className="mt-3 mt-sm-2 text-body-2">
                            В качестве значения принимается полный или относительный путь к файлу.
                        </div>

                        <div className="mt-5 mt-sm-3 text-heading-4">
                            Значения по умолчанию
                        </div>

                        <div className="mt-3 mt-sm-2 text-body-2">
                            Нет.
                        </div>

                        <div className="mt-5 mt-sm-3 text-heading-4">
                            Пример
                        </div>

                        <div className="mt-3 mt-sm-2">
                            <div className="code">
                                {"<!DOCTYPE html> <br> <html>"}
                            </div>
                        </div> */}

                    {/* <div className="mt-6">
                            <include src='src/templates/components/common/comments.html'></include>
                        </div>
                        */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        htmlAttributesList: state?.data?.htmlAttributesList?.list || [],
    };
}

export const AttributesListPage = connect(mapStateToProps)(AttributeContainer);

