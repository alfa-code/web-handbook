import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ValuesType } from 'utility-types';

import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import { PageTop } from 'Blocks/index';

import { RootState } from 'Src/client/app/app';

import { Link } from 'react-router-dom';

import PageTopImage from "Assets/images/html-instruments.svg";

import { Props } from './props';

import listStyles from 'Src/client/styles/lists.module.scss';
import linkStyles from 'Src/client/styles/links.module.scss';

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
                    <section>
                        <PageTop
                            title="Список HTML атрибутов"
                            description="Список разбит на группы по типу атрибута"
                            img={ PageTopImage }
                        />
                        { this.renderGroupsOfAttributes() }
                    </section>
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

const AttributesListPage = connect(mapStateToProps)(AttributeContainer);

export default AttributesListPage;

