import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { BreadcrumbsContainer } from 'Containers/breadcrumbs-container';

import { PageTop, DirectoryList } from "Blocks/index";

import { mapHtmlTagsListByAlphabet } from 'Utils/index';

import { selectHtmlTagsList } from 'Selectors/index';

import htmlDirectoryImage from 'Assets/images/html-directory.svg';

import { DOCUMENT_TITLES } from 'Constants/document-titles';

import { Props } from './props';

// import styles from './elements-list.module.scss';

class ElementsList extends PureComponent<Props> {
    componentDidMount = () => {
        document.title = DOCUMENT_TITLES.htmlElementsList;
    }

    render() {
        const {
            htmlTags,
            // htmlTags,
            match: { url },
        } = this.props;

        const lists = [{
            title: 'Список всех html элементов',
            subtitle: '',
            items: htmlTags
        }];

        return (
            <div className="page">
                <div className="pageContent">
                    <BreadcrumbsContainer />
                    <PageTop
                        title={ 'HTML справочник' }
                        description={ 'Ознакомься с описанием HTML элементов' }
                        img={ htmlDirectoryImage }
                    />
                    { lists.map((list, i) => {
                        const { items } = list;
                        const mappedItems = mapHtmlTagsListByAlphabet(items);

                        return (
                            <DirectoryList
                                key={i}
                                items={ mappedItems }
                                currentPath={ url }
                            />
                        );
                    }) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state 123', state)
    return {
        htmlTags: selectHtmlTagsList(state)
    }
}

const ElementsListPage = connect(mapStateToProps)(ElementsList);

export default ElementsListPage;
