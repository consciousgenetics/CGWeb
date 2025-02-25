"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanityFullSyncWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const sanity_sync_categories_1 = require("./sanity-sync-categories");
const sanity_sync_collections_1 = require("./sanity-sync-collections");
const sanity_sync_products_1 = require("./sanity-sync-products");
const id = "sanity-full-sync";
exports.sanityFullSyncWorkflow = (0, workflows_sdk_1.createWorkflow)({ name: id, retentionTime: 10000 }, function (input) {
    const [product_total, category_total, collection_total] = (0, workflows_sdk_1.parallelize)(sanity_sync_products_1.sanityProductSyncWorkflow.runAsStep({
        input: { product_ids: input.product_ids },
    }), sanity_sync_categories_1.sanityCategorySyncWorkflow.runAsStep({
        input: { category_ids: input.category_ids },
    }), sanity_sync_collections_1.sanityCollectionSyncWorkflow.runAsStep({
        input: { collection_ids: input.collection_ids },
    }));
    return new workflows_sdk_1.WorkflowResponse({
        product_total,
        category_total,
        collection_total,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXR5LWZ1bGwtc3luYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2FuaXR5LWZ1bGwtc3luYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFJMkM7QUFDM0MscUVBQXNFO0FBQ3RFLHVFQUF5RTtBQUN6RSxpRUFBbUU7QUFRbkUsTUFBTSxFQUFFLEdBQUcsa0JBQWtCLENBQUM7QUFFakIsUUFBQSxzQkFBc0IsR0FBRyxJQUFBLDhCQUFFLEVBQ3RDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQ2xDLFVBQVUsS0FBWTtJQUNwQixNQUFNLENBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLElBQUEsMkJBQVcsRUFDbkUsZ0RBQXlCLENBQUMsU0FBUyxDQUFDO1FBQ2xDLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFO0tBQzFDLENBQUMsRUFDRixtREFBMEIsQ0FBQyxTQUFTLENBQUM7UUFDbkMsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLEVBQUU7S0FDNUMsQ0FBQyxFQUNGLHNEQUE0QixDQUFDLFNBQVMsQ0FBQztRQUNyQyxLQUFLLEVBQUUsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRTtLQUNoRCxDQUFDLENBQ0gsQ0FBQztJQUNGLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQztRQUMxQixhQUFhO1FBQ2IsY0FBYztRQUNkLGdCQUFnQjtLQUNqQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQ0YsQ0FBQyJ9