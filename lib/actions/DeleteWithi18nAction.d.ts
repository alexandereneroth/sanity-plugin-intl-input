/// <reference types="react" />
import { IResolverProps } from '../types';
export declare const DeleteWithi18nAction: ({ id, type, draft, published, onComplete }: IResolverProps) => {
    onHandle: () => void;
    color: string;
    icon: any;
    disabled: boolean;
    title: any;
    label: string | undefined;
    dialog: false | {
        type: string;
        onClose: (() => void) | undefined;
        title: string;
        content: JSX.Element | null;
    };
};
