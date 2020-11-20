import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Props } from './props';

import {
    Directory,
} from 'Pages/index';

import cssDirectoryImage from 'Assets/images/css-directory.svg';

import { selectHtmlTagsList } from 'Selectors/index';

// import styles from './html-list.module.scss';

class Container extends Component<Props> {
    render() {
        const { htmlTags, match: { url } } = this.props;

        return (
            <Directory
                directory={ {
                    title: 'Css справочник',
                    description: 'Ознакомься с описанием CSS правил',
                    img: cssDirectoryImage,
                    lists: [{
                        title: 'Все правила',
                        subtitle: '',
                        items: htmlTags
                    }],
                    type: 'css',
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

export const CssListContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
