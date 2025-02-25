"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanityCategorySyncWorkflow = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const step = workflows_sdk_1.createStep;
const wf = workflows_sdk_1.createWorkflow;
const syncStep = step({ name: "syncStep", async: true }, async (input, { container }) => {
    const productModule = container.resolve(utils_1.Modules.PRODUCT);
    const sanityModule = container.resolve("sanity");
    let total = 0;
    const batchSize = 200;
    let hasMore = true;
    let offset = 0;
    let filter = {};
    if ((0, utils_1.isDefined)(input.category_ids)) {
        filter.id = input.category_ids;
    }
    while (hasMore) {
        const [categories, count] = await productModule.listAndCountProductCategories(filter, {
            select: [
                "id",
                "name",
                "handle",
                "parent_category_id",
                "category_children.id",
            ],
            relations: ["category_children"],
            skip: offset,
            take: batchSize,
            order: { id: "ASC" },
        });
        await (0, utils_1.promiseAll)(categories.map((prod) => {
            return sanityModule.upsertSyncDocument("category", prod);
        }));
        offset += batchSize;
        hasMore = offset < count;
        total += categories.length;
    }
    return new workflows_sdk_1.StepResponse({ total });
});
const id = "sanity-category-sync";
exports.sanityCategorySyncWorkflow = wf({ name: id, retentionTime: 10000 }, function (input) {
    const result = syncStep(input);
    return new workflows_sdk_1.WorkflowResponse(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXR5LXN5bmMtY2F0ZWdvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc2FuaXR5LXN5bmMtY2F0ZWdvcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBMkU7QUFDM0UscUVBSzJDO0FBSTNDLE1BQU0sSUFBSSxHQUFHLDBCQUFVLENBQUM7QUFDeEIsTUFBTSxFQUFFLEdBQUcsOEJBQWMsQ0FBQztBQU0xQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQ25CLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQ2pDLEtBQUssRUFBRSxLQUFZLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3BDLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELE1BQU0sWUFBWSxHQUF3QixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUVkLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDbkIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxNQUFNLEdBQTJCLEVBQUUsQ0FBQztJQUN4QyxJQUFJLElBQUEsaUJBQVMsRUFBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDakMsQ0FBQztJQUVELE9BQU8sT0FBTyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxHQUN2QixNQUFNLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLEVBQUU7WUFDeEQsTUFBTSxFQUFFO2dCQUNOLElBQUk7Z0JBQ0osTUFBTTtnQkFDTixRQUFRO2dCQUNSLG9CQUFvQjtnQkFDcEIsc0JBQXNCO2FBQ3ZCO1lBQ0QsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDaEMsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsU0FBUztZQUNmLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7U0FDckIsQ0FBQyxDQUFDO1FBRUwsTUFBTSxJQUFBLGtCQUFVLEVBQ2QsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3RCLE9BQU8sWUFBWSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsTUFBTSxJQUFJLFNBQVMsQ0FBQztRQUNwQixPQUFPLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixLQUFLLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDO0lBRUQsT0FBTyxJQUFJLDRCQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FDRixDQUFDO0FBRUYsTUFBTSxFQUFFLEdBQUcsc0JBQXNCLENBQUM7QUFFckIsUUFBQSwwQkFBMEIsR0FBRyxFQUFFLENBQzFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQ2xDLFVBQVUsS0FBWTtJQUNwQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFL0IsT0FBTyxJQUFJLGdDQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FDRixDQUFDIn0=