type OwnProps = {
    directory: {
        title?: string;
        description?: string;
        img?: string;
        lists : {
            title?: string;
            subtitle?: string;
            items?: any;
        }[];
        type: any;
        currentPath: string;
    };
}

export type Props = OwnProps;
