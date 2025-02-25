"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = upsertSanityProduct;
const sanity_sync_collections_1 = require("../workflows/sanity-sync-collections");
async function upsertSanityProduct({ event: { data }, container, }) {
    await (0, sanity_sync_collections_1.sanityCollectionSyncWorkflow)(container).run({
        input: {
            collection_ids: [data.id],
        },
    });
}
exports.config = {
    event: ["product-collection.created", "product-collection.updated"],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXR5LWNvbGxlY3Rpb24tc3luYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdWJzY3JpYmVycy9zYW5pdHktY29sbGVjdGlvbi1zeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLHNDQVNDO0FBWEQsa0ZBQW9GO0FBRXJFLEtBQUssVUFBVSxtQkFBbUIsQ0FBQyxFQUNoRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFDZixTQUFTLEdBQ3NCO0lBQy9CLE1BQU0sSUFBQSxzREFBNEIsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDaEQsS0FBSyxFQUFFO1lBQ0wsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUMxQjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFWSxRQUFBLE1BQU0sR0FBcUI7SUFDdEMsS0FBSyxFQUFFLENBQUMsNEJBQTRCLEVBQUUsNEJBQTRCLENBQUM7Q0FDcEUsQ0FBQyJ9