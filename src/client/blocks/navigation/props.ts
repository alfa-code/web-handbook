type OwnProps = {
    tags: string[];
    navigation?: {
        categoryName?: string,
        categoryIconUrl?: string,
        categories?: {
            name?: string,
            url?: string,
            childrens?: {
                text?: string,
                url?: string
            }[]
        }[],
    }[],
    closeMobileMenuCallback: any;
}

export type Props = OwnProps;
