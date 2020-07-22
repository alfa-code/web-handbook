import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BlogList } from 'Pages/admin/blog/blog-list';

type Props = {};

class Container extends Component<Props> {
    render() {
        return (
            <BlogList />
        );
    }
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {}

export const AdminBlogPageContainer = connect(mapStateToProps, mapDispatchToProps)(Container)
