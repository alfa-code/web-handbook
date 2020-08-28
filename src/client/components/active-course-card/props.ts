export type CardItem = {
    image?: string;
    header?: string;
    text?: string;
    color?: string;
    firstCustomSection?: any;
    secondCustomSection?: any;
    type?: 'horizontal' | 'default';
    link?: string;
}

export type Props = CardItem;
