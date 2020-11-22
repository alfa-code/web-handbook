import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tag } from 'Pages/index';

import { fetchHtmlTagInfoAC } from 'Actions/index';

import {
    selectIsHtmlTagsInfoLoading,
    selectHtmlTagInfo
} from 'Selectors/index';

import { Props } from './props';

// import styles from './tag-page.module.scss';

class Container extends Component<Props> {
    componentDidMount = () => {
        const {
            isHtmlTagsInfoLoading,
            tagInfo,
            fetchHtmlTagInfoDA
        } = this.props;

        const { match: { params: { htmlTag } } } = this.props;

        if (!isHtmlTagsInfoLoading && !tagInfo) {
            fetchHtmlTagInfoDA(htmlTag);
        }
    }

    render() {
        const { isHtmlTagsInfoLoading, tagInfo } = this.props;

        console.log('isHtmlTagsInfoLoading', isHtmlTagsInfoLoading)

        return (
            <Tag
                loading={ isHtmlTagsInfoLoading }
                tagInfo={ tagInfo }
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { match: { params: { htmlTag } } } = ownProps;
    return {
        isHtmlTagsInfoLoading: selectIsHtmlTagsInfoLoading(state),
        tagInfo: selectHtmlTagInfo(state, htmlTag)
    }
}

const mapDispatchToProps = {
    fetchHtmlTagInfoDA: fetchHtmlTagInfoAC
}

export const TagPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
