import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

type Props = {
    component: any;
    path: string;
    exact?: boolean;
}

export const FadingRoute: React.FC<Props> = ({ component: Component, ...rest }: Props) => {
    return (
        <Route
            { ...rest }
            render={
                (routeProps: RouteProps): any => {
                    return (
                        <Component { ...routeProps } />
                    )
                }
            }
        />
    )
}
