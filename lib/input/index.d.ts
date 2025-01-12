import "regenerator-runtime";
import React from "react";
import { Path, Marker } from "@sanity/types";
import { IType } from "../types";
declare type Props = {
    type: IType;
    value: Record<string, any>;
    compareValue?: Record<string, unknown>;
    onChange?: (...args: any[]) => any;
    onFocus: (...args: any[]) => any;
    onBlur: (...args: any[]) => any;
    focusPath?: Path;
    markers?: Marker[];
    level?: number;
    readOnly?: boolean;
    isRoot?: boolean;
    filterField?: (...args: any[]) => any;
    presence?: any[];
};
export declare const Input: React.ForwardRefExoticComponent<Props & React.RefAttributes<any>>;
export default Input;
