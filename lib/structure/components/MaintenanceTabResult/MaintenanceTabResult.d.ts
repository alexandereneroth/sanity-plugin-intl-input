import React from "react";
import { TMessagesConfig } from "../../../types";
declare type Props = {
    pending?: boolean;
    count: number;
    labelName?: keyof NonNullable<TMessagesConfig["translationsMaintenance"]>;
    onClick?: (event: React.SyntheticEvent<HTMLButtonElement, Event>) => void;
};
export declare const MaintenanceTabResult: React.FunctionComponent<Props>;
export {};
