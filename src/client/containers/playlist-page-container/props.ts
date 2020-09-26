import { RouteChildrenProps } from "react-router-dom";

type MapStateToProps = {
}

type MapDispatchToProps = {
};

type OwnProps = RouteChildrenProps<{ id: string }> & {
    userCourse: any;
}

export type Props = OwnProps & MapStateToProps & MapDispatchToProps;
