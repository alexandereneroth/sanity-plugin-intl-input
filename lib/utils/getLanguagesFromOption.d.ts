import { TLanguagesOption } from '../types';
import type { SanityDocument } from '@sanity/client';
export declare const getLanguagesFromOption: <D extends SanityDocument<Record<string, any>>>(langs: TLanguagesOption, document?: D | null | undefined) => Promise<import("../types").ILanguageObject[]>;
