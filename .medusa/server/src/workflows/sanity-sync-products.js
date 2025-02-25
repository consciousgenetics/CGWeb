"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanityProductSyncWorkflow = void 0;
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
    if ((0, utils_1.isDefined)(input.product_ids)) {
        filter.id = input.product_ids;
    }
    while (hasMore) {
        const [products, count] = await productModule.listAndCountProducts(filter, {
            select: ["id", "handle", "title"],
            skip: offset,
            take: batchSize,
            order: { id: "ASC" },
        });
        await (0, utils_1.promiseAll)(products.map((prod) => {
            return sanityModule.upsertSyncDocument("product", prod);
        }));
        offset += batchSize;
        hasMore = offset < count;
        total += products.length;
    }
    return new workflows_sdk_1.StepResponse({ total });
});
const id = "sanity-product-sync";
exports.sanityProductSyncWorkflow = wf({ name: id, retentionTime: 10000 }, function (input) {
    const result = syncStep(input);
    return new workflows_sdk_1.WorkflowResponse(result);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXR5LXN5bmMtcHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3Nhbml0eS1zeW5jLXByb2R1Y3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUEyRTtBQUMzRSxxRUFLMkM7QUFJM0MsTUFBTSxJQUFJLEdBQUcsMEJBQVUsQ0FBQztBQUN4QixNQUFNLEVBQUUsR0FBRyw4QkFBYyxDQUFDO0FBTTFCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FDbkIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFDakMsS0FBSyxFQUFFLEtBQVksRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDcEMsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekQsTUFBTSxZQUFZLEdBQXdCLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWQsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLE1BQU0sR0FBMkIsRUFBRSxDQUFDO0lBQ3hDLElBQUksSUFBQSxpQkFBUyxFQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztJQUNoQyxDQUFDO0lBRUQsT0FBTyxPQUFPLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEdBQUcsTUFBTSxhQUFhLENBQUMsb0JBQW9CLENBQ2hFLE1BQU0sRUFDTjtZQUNFLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO1lBQ2pDLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO1NBQ3JCLENBQ0YsQ0FBQztRQUVGLE1BQU0sSUFBQSxrQkFBVSxFQUNkLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNwQixPQUFPLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLE1BQU0sSUFBSSxTQUFTLENBQUM7UUFDcEIsT0FBTyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsS0FBSyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUVELE9BQU8sSUFBSSw0QkFBWSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQ0YsQ0FBQztBQUVGLE1BQU0sRUFBRSxHQUFHLHFCQUFxQixDQUFDO0FBRXBCLFFBQUEseUJBQXlCLEdBQUcsRUFBRSxDQUN6QyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUNsQyxVQUFVLEtBQVk7SUFDcEIsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9CLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQ0YsQ0FBQyJ9