export declare function getCollapsedWithDefaults(options: (import("@sanity/types").CollapseOptions & {
    columns?: number | undefined;
}) | undefined, level: number): {
    collapsible: boolean;
    collapsed: boolean;
};
