import React from 'react';

import { AnyAgrsFunction } from 'Types/functions';
import { Shape } from 'Types/objects';

type OwnProps = {
    validate?: AnyAgrsFunction<Shape<string>>;
    FormField?: React.ComponentClass<any> | React.FC<any>;
    initialValues?: Shape<string>;
}

type ReduxStateProps = {
    sending?: boolean;
}

type ReduxDispatchProps = {
    submit?: (value: any) => void;
    getInitialValuesDA?: () => void;
}

export type Props = OwnProps & ReduxDispatchProps & ReduxStateProps;
