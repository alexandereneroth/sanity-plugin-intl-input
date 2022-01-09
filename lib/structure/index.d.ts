import 'regenerator-runtime';
import { IDefaultDocumentNodeStructureProps } from './IDefaultDocumentNodeStructureProps';
export declare const getDocumentNodeViewsForSchemaType: (type: string) => (import("@sanity/structure/dist/dts/views/ComponentView").ComponentViewBuilder | import("@sanity/structure/dist/dts/views/FormView").FormViewBuilder)[];
export declare const getDefaultDocumentNode: (props: IDefaultDocumentNodeStructureProps) => import("@sanity/structure/dist/dts/Document").DocumentBuilder;
export declare const getDocumentTypes: () => {
    withoutI18n: ListItemBuilder[];
    withI18n: import("@sanity/structure/dist/dts/ListItem").ListItemBuilder[];
};
export declare const getMaintenanceTabComponent: () => import("@sanity/structure/dist/dts/Component").ComponentBuilder;
export declare const getMaintenanceListItem: () => import("@sanity/structure/dist/dts/ListItem").ListItemBuilder;
export declare const getFilteredDocumentTypeListItems: () => any[];
declare const _default: () => import("@sanity/structure/dist/dts/List").ListBuilder;
export default _default;
