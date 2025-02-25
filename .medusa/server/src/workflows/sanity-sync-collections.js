"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanityCollectionSyncWorkflow = void 0;
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
    if ((0, utils_1.isDefined)(input.collection_ids)) {
        filter.id = input.collection_ids;
    }
    while (hasMore) {
        const [collections, count] = await productModule.listAndCountProductCollections(filter, {
            select: ["id", "handle", "title"],
            skip: offset,
            take: batchSize,
            order: { id: "ASC" },
        });
        await (0, utils_1.promiseAll)(collections.map((prod) => {
            return sanityModule.upsertSyncDocument("collection", prod);
        }));
        offset += batchSize;
        hasMore = offset < count;
        total += collections.length;
    }
    return new workflows_sdk_1.StepResponse({ total });
});
const id = "sanity-collection-sync";
exports.sanityCollectionSyncWorkflow = wf({ name: id, retentionTime: 10000 }, function (input) {
    const result = syncStep(input);
    return new workflows_sdk_1.WorkflowResponse(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXR5LXN5bmMtY29sbGVjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3Nhbml0eS1zeW5jLWNvbGxlY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUEyRTtBQUMzRSxxRUFLMkM7QUFJM0MsTUFBTSxJQUFJLEdBQUcsMEJBQVUsQ0FBQztBQUN4QixNQUFNLEVBQUUsR0FBRyw4QkFBYyxDQUFDO0FBTTFCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FDbkIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDakMsS0FBSyxFQUFFLEtBQVksRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDcEMsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekQsTUFBTSxZQUFZLEdBQXdCLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWQsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLE1BQU0sR0FBMkIsRUFBRSxDQUFDO0lBQ3hDLElBQUksSUFBQSxpQkFBUyxFQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTyxPQUFPLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEdBQ3hCLE1BQU0sYUFBYSxDQUFDLDhCQUE4QixDQUFDLE1BQU0sRUFBRTtZQUN6RCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztZQUNqQyxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxTQUFTO1lBQ2YsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtTQUNyQixDQUFDLENBQUM7UUFFTCxNQUFNLElBQUEsa0JBQVUsRUFDZCxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxZQUFZLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRixNQUFNLElBQUksU0FBUyxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLEtBQUssSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRCxPQUFPLElBQUksNEJBQVksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUNGLENBQUM7QUFFRixNQUFNLEVBQUUsR0FBRyx3QkFBd0IsQ0FBQztBQUV2QixRQUFBLDRCQUE0QixHQUFHLEVBQUUsQ0FDNUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFDbEMsVUFBVSxLQUFZO0lBQ3BCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUvQixPQUFPLElBQUksZ0NBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUNGLENBQUMifQ==