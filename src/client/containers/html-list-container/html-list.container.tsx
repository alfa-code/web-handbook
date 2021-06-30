import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';

import loadable from '@loadable/component';

import { Props } from './props';

import htmlDirectoryImage from 'Assets/images/html-directory.svg';

import { selectHtmlTagsList } from 'Selectors/index';

import { Loading } from 'Components/loading';

// import styles from './html-list.module.scss';

const DirectoryLazy = loadable(() => import('Pages/directory/directory.page'));

class Container extends Component<Props> {
    render() {
        const {
            htmlTags,
            match: { url },
        } = this.props;

        try {
            return (
                <Suspense fallback={<Loading />}>
                    <DirectoryLazy
                        directory={ {
                            title: 'HTML справочник',
                            description: 'Ознакомься с описанием HTML элементов',
                            img: htmlDirectoryImage,
                            lists: [{
                                title: 'Список всех html элементов',
                                subtitle: '',
                                items: htmlTags
                            }],
                            type: 'html',
                            currentPath: url,
                        } }
                    />
                </Suspense>
            );
        } catch (e) {
            return null;
        }


    }
}

const mapStateToProps = (state) => {
    return {
        htmlTags: selectHtmlTagsList(state)
    }
}

export const HtmlListContainer = connect(mapStateToProps)(Container);
