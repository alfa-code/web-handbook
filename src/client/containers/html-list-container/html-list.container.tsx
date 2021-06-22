import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Props } from './props';

import {
    Directory,
} from 'Pages/index';

import htmlDirectoryImage from 'Assets/images/html-directory.svg';

import { selectHtmlTagsList } from 'Selectors/index';

// import styles from './html-list.module.scss';

class Container extends Component<Props> {
    render() {
        const { htmlTags, match: { url } } = this.props;

        return (
            <Directory
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        htmlTags: selectHtmlTagsList(state)
    }
}

const mapDispatchToProps = {
}

export const HtmlListContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
