import React from 'react';
import { Link } from 'react-router-dom';

export const LinkElement = ({ children }: { children: JSX.Element }) => {
    return (
        <Link to={ `/html-list/${children.props.children}` }>
            { children }
        </Link>
    );
}

export const LinkAttribute = ({ children }: { children: JSX.Element }) => {
    return (
        <Link to={ `/attribute-list/${children.props.children}` }>
            { children }
        </Link>
    );
}

export const LE = LinkElement;
export const LA = LinkAttribute;
