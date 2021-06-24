import React from 'react';
import { Link } from 'react-router-dom';

export const LinkElement = ({ children }: { children: JSX.Element }) => {
    return (
        <Link to={ `/html-list/${children.props.children}` }>
            { children }
        </Link>
    );
}
