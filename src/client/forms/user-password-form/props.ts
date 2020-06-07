import React from 'react';

import { AnyAgrsFunction } from 'Types/functions';
import { Shape } from 'Types/objects';

type OwnProps = {
    validate: AnyAgrsFunction<Shape<string>>;
    PasswordField: React.ComponentClass<any> | React.FC<any>;
}

type ReduxStateProps = {
    hintVisible: boolean;
    sending: boolean;
}

type ReduxDispatchProps = {
    submit: (value: any) => void;
    setHintVisibility: (isVisible: boolean) => void;
}

export type Props = OwnProps & ReduxDispatchProps & ReduxStateProps;
