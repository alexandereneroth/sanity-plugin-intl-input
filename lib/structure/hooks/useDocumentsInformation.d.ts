import React from 'react';
import { Ti18nDocument } from '../../types';
export declare const useDocumentsInformation: (schema: string) => {
    pending: boolean;
    setPending: React.Dispatch<React.SetStateAction<boolean>>;
    documents: Ti18nDocument<any>[];
    baseDocuments: Ti18nDocument<any>[];
    translatedDocuments: Ti18nDocument<any>[];
    idStructureMismatchDocuments: Ti18nDocument<any>[];
    documentsSummaryInformation: {
        idStructureMismatch: Ti18nDocument<any>[];
        missingLanguageField: Ti18nDocument<any>[];
        missingDocumentRefs: Ti18nDocument<any>[];
        orphanDocuments: Ti18nDocument<any>[];
        referenceBehaviorMismatch: Ti18nDocument<any>[];
        baseLanguageMismatch: Ti18nDocument<any>[];
    };
    fetchInformation: (selectedSchema: string) => Promise<void>;
};
