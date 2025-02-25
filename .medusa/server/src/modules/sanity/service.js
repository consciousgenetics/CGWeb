"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@sanity/client");
const SyncDocumentTypes = {
    PRODUCT: "product",
    CATEGORY: "category",
    COLLECTION: "collection",
};
class SanityModuleService {
    constructor({}, options) {
        this.transformProductForUpdate = (product) => {
            return {
                set: {
                    internalTitle: product.title,
                    pathname: { _type: "slug", current: "/products/" + product.handle },
                },
            };
        };
        this.transformCategoryForUpdate = (category) => {
            return {
                set: {
                    internalTitle: category.name,
                    pathname: { _type: "slug", current: "/categories/" + category.handle },
                    // parent_category: category.parent_category_id
                    //   ? {
                    //       _type: "reference",
                    //       _ref: category.parent_category_id,
                    //     }
                    //   : undefined,
                    // children_categories: category.category_children.map((child) => {
                    //   if (!child.id) return;
                    //   return { _type: "reference", _ref: child.id };
                    // }),
                },
            };
        };
        this.transformCollectionForUpdate = (collection) => {
            return {
                set: {
                    internalTitle: collection.title,
                    pathname: {
                        _type: "slug",
                        current: "/collections/" + collection.handle,
                    },
                },
            };
        };
        this.transformProductForCreate = (product) => {
            return {
                _type: this.typeMap[SyncDocumentTypes.PRODUCT],
                _id: product.id,
                internalTitle: product.title,
                pathname: { _type: "slug", current: "/products/" + product.handle },
            };
        };
        this.transformCategoryForCreate = (category) => {
            return {
                _type: this.typeMap[SyncDocumentTypes.CATEGORY],
                _id: category.id,
                internalTitle: category.name,
                pathname: { _type: "slug", current: "/categories/" + category.handle },
                // parent_category: {
                //   _type: "reference",
                //   _ref: category.parent_category_id,
                // },
                // children_categories: category.category_children.map((child) => ({
                //   _type: "reference",
                //   _ref: child.id,
                //   _key: child.id,
                // })),
            };
        };
        this.transformCollectionForCreate = (collection) => {
            return {
                _type: this.typeMap[SyncDocumentTypes.COLLECTION],
                _id: collection.id,
                internalTitle: collection.title,
                pathname: { _type: "slug", current: "/collections/" + collection.handle },
            };
        };
        this.client = (0, client_1.createClient)({
            projectId: options.project_id,
            apiVersion: options.api_version,
            dataset: options.dataset,
            token: options.api_token,
        });
        this.studioUrl = options.studio_url;
        this.typeMap = Object.assign({}, {
            [SyncDocumentTypes.PRODUCT]: "product",
            [SyncDocumentTypes.CATEGORY]: "category",
            [SyncDocumentTypes.COLLECTION]: "collection",
        }, options.type_map || {});
        this.createTransformationMap = {
            [SyncDocumentTypes.PRODUCT]: this.transformProductForCreate,
            [SyncDocumentTypes.CATEGORY]: this.transformCategoryForCreate,
            [SyncDocumentTypes.COLLECTION]: this.transformCollectionForCreate,
        };
        this.updateTransformationMap = {
            [SyncDocumentTypes.PRODUCT]: this.transformProductForUpdate,
            [SyncDocumentTypes.CATEGORY]: this.transformCategoryForUpdate,
            [SyncDocumentTypes.COLLECTION]: this.transformCollectionForUpdate,
        };
    }
    async upsertSyncDocument(type, data) {
        const existing = await this.client.getDocument(data.id);
        if (existing) {
            return await this.updateSyncDocument(type, data);
        }
        return await this.createSyncDocument(type, data);
    }
    async createSyncDocument(type, data, options) {
        const doc = this.createTransformationMap[type](data);
        return await this.client.create(doc, options);
    }
    async updateSyncDocument(type, data) {
        const operations = this.updateTransformationMap[type](data);
        return await this.client.patch(data.id, operations).commit();
    }
    async deleteSyncDocument(type, id) {
        return await this.client.delete(id);
    }
    __joinerConfig() {
        return {
            serviceName: "sanity",
            primaryKeys: ["id"],
            linkableKeys: {},
            alias: [
                {
                    name: "sanity",
                },
            ],
        };
    }
    async getStudioLink(type, id, config = {}) {
        const resolvedType = config.explicit_type ? type : this.typeMap[type];
        if (!this.studioUrl) {
            throw new Error("No studio URL provided");
        }
        return `${this.studioUrl}/structure/${resolvedType};${id}`;
    }
    async list(filter, config) {
        const data = await this.client.getDocuments(filter.id);
        return data.map((doc) => ({
            id: doc._id,
            ...doc,
        }));
    }
}
exports.default = SanityModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nhbml0eS9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsMkNBSXdCO0FBRXhCLE1BQU0saUJBQWlCLEdBQUc7SUFDeEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsVUFBVSxFQUFFLFlBQVk7Q0FDaEIsQ0FBQztBQTZCWCxNQUFxQixtQkFBbUI7SUFPdEMsWUFBWSxFQUF3QixFQUFFLE9BQXNCO1FBbUdwRCw4QkFBeUIsR0FBRyxDQUFDLE9BQW1CLEVBQUUsRUFBRTtZQUMxRCxPQUFPO2dCQUNMLEdBQUcsRUFBRTtvQkFDSCxhQUFhLEVBQUUsT0FBTyxDQUFDLEtBQUs7b0JBQzVCLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFO2lCQUNwRTthQUNGLENBQUM7UUFDSixDQUFDLENBQUM7UUFFTSwrQkFBMEIsR0FBRyxDQUFDLFFBQTRCLEVBQUUsRUFBRTtZQUNwRSxPQUFPO2dCQUNMLEdBQUcsRUFBRTtvQkFDSCxhQUFhLEVBQUUsUUFBUSxDQUFDLElBQUk7b0JBQzVCLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLGNBQWMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUN0RSwrQ0FBK0M7b0JBQy9DLFFBQVE7b0JBQ1IsNEJBQTRCO29CQUM1QiwyQ0FBMkM7b0JBQzNDLFFBQVE7b0JBQ1IsaUJBQWlCO29CQUNqQixtRUFBbUU7b0JBQ25FLDJCQUEyQjtvQkFDM0IsbURBQW1EO29CQUNuRCxNQUFNO2lCQUNQO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUNNLGlDQUE0QixHQUFHLENBQUMsVUFBZ0MsRUFBRSxFQUFFO1lBQzFFLE9BQU87Z0JBQ0wsR0FB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