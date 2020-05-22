import React, { ReactNode } from 'react';

type StyleWrapperProps = {
    children: ReactNode;
    className?: string;
};

export function getStyleWrapper(styles, name) {
    return function StyleWrapper ({ children, className }: StyleWrapperProps) {
        return (
            <div className={`${styles[name]} ${className}`}>
                { children }
            </div>
        );
    };
}
