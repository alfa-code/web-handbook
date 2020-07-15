import React, { useCallback, useEffect, useState } from 'react';

import { Props } from './props';

import styles from './wave-effect.module.scss';

/**
 * Прикольная расходящаяся волна для кнопки. Нужно обернуть этим компонентом целевой компонент
 * @param props
 * @constructor
 */
export const WaveEffect = (props: Props): JSX.Element => {
    const { children, className, onClick, onMouseLeave, darkMode } = props;
    const [wave, setWave] = useState([]);

    const setWaveHandle = (event) => {
        onClick(event);

        setWave([...wave, true]);
    }

    const resetWaves = () => {
        setWave([]);
    }

    const onMouseLeaveHandler = useCallback((event) => {
        onMouseLeave(event);

        setTimeout(() => {
            resetWaves();
        }, 500)
    }, [onMouseLeave])


    useEffect(() => {
        if (wave.length > 20) {
            resetWaves()
        }
    }, [wave])

    return (
        <div
            { ...props }
            onMouseLeave={ onMouseLeaveHandler }
            onClick={ setWaveHandle }
            className={ `${styles.container} ${className}`}
        >
            {
                wave.map ( (item, index) => <div key={index} className={ `${styles.wave} ${darkMode ? 'dark' : ''}`} />)
            }
            { children }
        </div>
    );
};

WaveEffect.defaultProps = {
    onClick: () => void 0,
    onMouseLeave: () => void 0,
    darkMode: false,
}
