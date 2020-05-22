import React, { ReactNode } from 'react';

type StyleWrapperProps = {
    children: ReactNode;
};

export function getStyleWrapper(styles, name) {
    return function StyleWrapper ({ children }: StyleWrapperProps) {
        return (
            <div className={styles[name]}>
                { children }
            </div>
        );
    };
}
