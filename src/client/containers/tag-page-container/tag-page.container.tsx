import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Tag } from 'Pages/index';

import { fetchHtmlTagInfoAC } from 'Actions/index';

import {
    selectIsHtmlTagsInfoLoading,
    selectHtmlTagInfo,
} from 'Selectors/index';

import { Props } from './props';

// import styles from './tag-page.module.scss';

class Container extends Component<Props> {
    componentDidMount = () => {
        const {
            isHtmlTagsInfoLoading,
            tagInfo,
            fetchHtmlTagInfoDA,
            htmlTag
        } = this.props;

        if (!isHtmlTagsInfoLoading && !tagInfo && htmlTag) {
            fetchHtmlTagInfoDA(htmlTag);
        }
    }

    shouldComponentUpdate = (nextProps) => {
        const {
            fetchHtmlTagInfoDA,
            htmlTag
        } = this.props;

        if (nextProps.htmlTag !== htmlTag) {
            fetchHtmlTagInfoDA(nextProps.htmlTag);
        }

        return true;
    }

    render() {
        const {
            isHtmlTagsInfoLoading,
            tagInfo,
            htmlTag,
        } = this.props;

        return (
            <Tag
                loading={ isHtmlTagsInfoLoading }
                tagInfo={ tagInfo }
                htmlTag={ htmlTag }
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { match: { params: { htmlTag } } } = ownProps;

    return {
        isHtmlTagsInfoLoading: selectIsHtmlTagsInfoLoading(state),
        tagInfo: selectHtmlTagInfo(state, htmlTag),
        htmlTag,
    }
}

const mapDispatchToProps = {
    fetchHtmlTagInfoDA: fetchHtmlTagInfoAC,
}

export const TagPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
