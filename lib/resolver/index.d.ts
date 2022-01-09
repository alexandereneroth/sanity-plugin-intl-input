/// <reference types="react" />
import { IType } from '../types/IType';
export default function resolveInput(type: IType): import("react").ForwardRefExoticComponent<{
    type: IType;
    value: Record<string, any>;
    compareValue?: Record<string, unknown> | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    focusPath?: import("@sanity/types/dist/dts").Path | undefined;
    markers?: import("@sanity/types/dist/dts").ValidationMarker[] | undefined;
    level?: number | undefined;
    readOnly?: boolean | undefined;
    isRoot?: boolean | undefined;
    filterField?: ((...args: any[]) => any) | undefined;
    presence?: any[] | undefined;
} & import("react").RefAttributes<any>> | undefined;
