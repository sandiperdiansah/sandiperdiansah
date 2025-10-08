import { AnchorHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type TechIconType = Record<
    string,
    React.ComponentType<{ className?: string; size?: string | number }>
>;

export type ProjectType = {
    title: string;
    description: string;
    thumbnail: string;
    tech: {
        icon: IconType;
        label: string;
    }[];
    links: {
        demo: string;
        source: string;
    };
    
};
