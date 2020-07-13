import React, { useCallback, useEffect, useState } from 'react';
import { media } from 'Utils/media/media';

import { Props } from './props';

/**
 * Показывает контент в соответствии вычисленному медиазапросу
 * @param props
 * @constructor
 */
export const MatchMedia = (props: Props) => {
    const { children, maxWidth } = props;
    const [isVisible, setIsVisible] = useState(false);
    let listener = () => void 0;

    const matchMedia = useCallback(() => {
        if (media(maxWidth)) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [maxWidth])

    useEffect(() => {
        matchMedia();
    }, [])

    useEffect(() => {
        window.removeEventListener('resize', listener);

        listener = matchMedia;

        window.addEventListener('resize', listener);

    }, [maxWidth])

    return (
        <React.Fragment>
            { isVisible ? children : false }
        </React.Fragment>
    );
};
