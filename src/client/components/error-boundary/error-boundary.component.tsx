import React, { Component } from 'react';

import { Props } from './props';

import styles from './error-boundary.module.scss';

export class ErrorBoundary extends React.Component<Props, { hasError: boolean; }>{
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    // componentDidCatch(error, errorInfo) {
    //     logErrorToMyService(error, errorInfo);
    // }

    render() {
        if (this.state.hasError) {
            return (
                <div className={ styles.error }>
                    Контент временно недоступен.
                </div>
            )
        }

        return this.props.children;
    }
}
