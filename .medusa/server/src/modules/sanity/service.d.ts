import { ModuleJoinerConfig, ProductCategoryDTO, ProductCollectionDTO, ProductDTO } from "@medusajs/types";
import { FirstDocumentMutationOptions } from "@sanity/client";
declare const SyncDocumentTypes: {
    readonly PRODUCT: "product";
    readonly CATEGORY: "category";
    readonly COLLECTION: "collection";
};
type SyncDocumentTypes = (typeof SyncDocumentTypes)[keyof typeof SyncDocumentTypes];
type SyncDocumentInputs<T> = T extends "product" ? ProductDTO : T extends "category" ? ProductCategoryDTO : T extends "collection" ? ProductCollectionDTO : never;
type SanityOptions = {
    api_token: string;
    project_id: string;
    api_version: string;
    dataset: "production" | "development";
    type_map?: Record<SyncDocumentTypes, string>;
    studio_url?: string;
};
type InjectedDependencies = {};
export default class SanityModuleService {
    private client;
    private studioUrl?;
    private typeMap;
    private createTransformationMap;
    private updateTransformationMap;
    constructor({}: InjectedDependencies, options: SanityOptions);
    upsertSyncDocument<T extends SyncDocumentTypes>(type: T, data: SyncDocumentInputs<T>): Promise<import("@sanity/client").SanityDocument<Record<string, any>>>;
    createSyncDocument<T extends SyncDocumentTypes>(type: T, data: SyncDocumentInputs<T>, options?: FirstDocumentMutationOptions): Promise<import("@sanity/client").SanityDocument<Record<string, any>>>;
    updateSyncDocument<T extends SyncDocumentTypes>(type: T, data: SyncDocumentInputs<T>): Promise<import("@sanity/client").SanityDocument<Record<string, any>>>;
    deleteSyncDocument<T extends SyncDocumentTypes>(type: T, id: string): Promise<import("@sanity/client").SanityDocument<Record<string, any>>>;
    __joinerConfig(): ModuleJoinerConfig;
    getStudioLink(type: string, id: string, config?: {
        explicit_type?: boolean;
    }): Promise<string>;
    list(filter: any, config: any): Promise<{
        _id: string;
        _rev: string;
        _type: string;
        _createdAt: string;
        _updatedAt: string;
        _originalId?: string;
        id: string;
    }[]>;
    private transformProductForUpdate;
    private transformCategoryForUpdate;
    private transformCollectionForUpdate;
    private transformProductForCreate;
    private transformCategoryForCreate;
    private transformCollectionForCreate;
}
export {};
